exports.seed = function(knex, Promise) {
  return knex("messages")
    .del()
    .then(function() {
      return knex("messages").insert([
        {
          id: 1,
          message: "Hey, whats up?",
          timestamp: "4/4/2018, 7:50:46 PM",
          users_id: 2
        },
        {
          id: 2,
          timestamp: "4/4/2018, 7:51:00 PM",
          users_id: 1,
          image:
            "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
        },
        {
          id: 3,
          message: "I want in on this too!",
          timestamp: "4/4/2018, 7:51:15 PM",
          users_id: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE messages_id_seq RESTART WITH 4;");
    });
};
