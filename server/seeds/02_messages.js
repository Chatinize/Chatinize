exports.seed = function(knex, Promise) {
  return knex("messages")
    .del()
    .then(function() {
      return knex("messages").insert([
        {
          id: 1,
          message: "Hey, whats up?",
          timestamp: "2018-04-04T19:24:07.738Z",
          users_id: 2
        },
        {
          id: 2,
          message: "Not much, how are you?",
          timestamp: "2018-04-04T19:24:33.004Z",
          users_id: 1
        },
        {
          id: 3,
          message: "I want in on this too!",
          timestamp: "2018-04-04T19:24:45.644Z",
          users_id: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE messages_id_seq RESTART WITH 4;");
    });
};
