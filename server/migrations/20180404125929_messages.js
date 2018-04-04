exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", table => {
    table.increments("id").primary();
    table.string("message");
    table.string("image");
    table.dateTime("timestamp");
    table
      .integer("users_id")
      .references("users.id")
      .onDelete("CASCADE");
    table.string("link");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("messages");
};
