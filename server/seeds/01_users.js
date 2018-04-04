exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          git_id: 12345,
          email: "collinsBJ@me.com",
          username: "liljaywc",
          avatar:
            "https://news.artnet.com/app/news-upload/2018/02/2016ad-st-ve0003_o3-1-e1518203509298-1500x826.jpg",
          github: "github.com"
        },
        {
          id: 2,
          git_id: 97823,
          email: "jamesMann@google.com",
          username: "saxmann",
          avatar:
            "https://images.pexels.com/photos/255349/pexels-photo-255349.jpeg",
          github: "github.com"
        },
        {
          id: 3,
          git_id: 87234,
          email: "benCas@yahoo.com",
          username: "bcas",
          avatar:
            "https://media.thetab.com/blogs.dir/279/files/2018/02/woman-girl-female-blonde-person-people-human-11.jpg",
          github: "github.com"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 4;");
    });
};
