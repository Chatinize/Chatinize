const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const queries = require("./queries");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const GitStrategy = require('passport-github').Strategy;

require("dotenv").load();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: 'bquyqueajhbd',
  resave: true,
  saveUninitialized: true,
  store: new FileStore({ path: '/tmp/sessions' })
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GitStrategy({
  clientID: process.env.GIT_PUBLIC,
  clientSecret: process.env.GIT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
  function (clientID, clientSecret, profile, done) {
    queries.readUsers('users', profile.id).then(user => {
      let newUser = JSON.parse(JSON.stringify(user))
      console.log('newUser', newUser)
      if (!newUser) {
        newUser = { git_id: profile.id, email: profile.emails[0].value, username: profile.displayName, avatar: profile.photos[0].value, github: profile.profileUrl }
        queries.create('users', newUser).then(user => {
          let userData = JSON.parse(JSON.stringify(user))
          response.json(userData);
        })
      }
      done(null, newUser)
    })
  }
));

passport.serializeUser(function (user, done) {
  console.log('serializeUser: ' + user.id)
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log('deserializeUser: ' + id)
  queries.readUsers('users', id).then(user => {
    let newUser = JSON.parse(JSON.stringify(user))
    if (!newUser) { done(new Error('User not found! ' + id)) }
  done(null, newUser)
  })
});

app.get('/', express.static('./public/index.html'))

app.get('/auth', (req, res, next) => {
  console.log('session:', req.session)
  res.send({ user: req.user })
})

app.get('/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: 'http://localhost:8080/chat#/chat',
    failureRedirect: 'http://localhost:3000/auth/github[0]'
  }));

app.get('/auth/github', passport.authenticate('github'));

app.get("/users", (request, response) => {
  queries
    .list("users")
    .then(data => {
      response.json({ data });
    })
    .catch(console.error);
});

app.get("/messages", (request, response) => {
  console.log("req-user", request.newUser)
  queries
    .list("messages")
    .then(data => {
      response.json({ data });
    })
    .catch(console.error);
});

app.get("/users/:id", (request, response) => {
  queries
    .read("users", request.params.id)
    .then(data => {
      data ? response.json({ data }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/messages/:id", (request, response) => {
  queries
    .read("messages", request.params.id)
    .then(data => {
      data ? response.json({ data }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/messages", (request, response) => {
  queries
    .create("messages", request.body)
    .then(data => {
      response.status(201).json({ data: data });
    })
    .catch(console.error);
});

app.put("/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(data => {
      response.json(data[0]);
    })
    .catch(console.error);
});

app.delete("/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.listen(process.env.PORT || 3000);
