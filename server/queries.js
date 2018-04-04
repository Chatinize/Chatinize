const database = require("./database-connection");

module.exports = {
  list() {
    return database("userdata").select();
  },
  read(id) {
    return database("userdata")
      .select()
      .where("id", id)
      .first();
  },
  create(data) {
    return database("userdata")
      .insert(data)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, data) {
    return database("userdata")
      .update(data)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  delete(id) {
    return database("userdata")
      .delete()
      .where("id", id);
  }
};
