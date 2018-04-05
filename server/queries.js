const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(table, id) {
    return database(table)
      .select()
      .where("id", id)
      .first();
  },
  readUsers(db, id) {
    return database(db).select().where("git_id", id).first();
  },
  create(table, data) {
    return database(table)
      .insert(data)
      .then(() => database(table).select());
  },
  update(table, id, data) {
    return database(table)
      .update(data)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  delete(table, id) {
    return database(table)
      .delete()
      .where("id", id);
  }
};
