const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const queries = require("./queries");

app.use(cors());
app.use(bodyParser.json());

app.get("/users", (request, response) => {
  queries
    .list("users")
    .then(data => {
      response.json({ data });
    })
    .catch(console.error);
});

app.get("/messages", (request, response) => {
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