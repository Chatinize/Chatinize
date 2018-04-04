1.  Update migration schemas:
    exports.up = function(knex, Promise) {
    return knex.schema.createTable('mytable', table => {
    table.increments('id');
    table.string('placeholder');
    });
    };

    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('mytable');
    };

2.  Update seeds:
    exports.seed = function(knex, Promise) {
    return knex('mytable')
    .del()
    .then(function() {
    return knex('mytable').insert([
    { id: 1, placeholder: 'rowValue1' },
    { id: 2, placeholder: 'rowValue2' },
    { id: 3, placeholder: 'rowValue3' }
    ]);
    })
    .then(() => {
    return knex.raw('ALTER SEQUENCE mytable_id_seq RESTART WITH 4;');
    });
    };

3.  Update knexfile.js development connection
    connection: 'postgres:///mydb'

4.  Update table names in queries.js

5.  Add 'start': 'node app.js' to package.json

6.  Run migrations
    knex migrate:latest

7.  Run seeds
    knex seed:run

8.  Initialize git repo
    git init

9.  Initialize Heroku repo
    heroku create {name}

10. Push files to Heroku

11. Provision pg Heroku addon
    heroku addons:create heroku-postgresql:hobby-dev

12. Push local db to heroku
    heroku pg:push {dbname} DATABASE_URL --app {heroku app name}
