module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///chatinize"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
