exports.up = function(knex, Promise) {
  return knex.schema.createTable("userdata", table => {
    table.increments("id").primary();
    table.integer("git_id");
    table.string("email");
    table.string("username");
    table.string("avatar");
    table.string("github");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("userdata");
};
