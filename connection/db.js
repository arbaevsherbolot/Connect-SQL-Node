require("dotenv").config();
const db = require("mysql2");

const connection = db.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "30092006",
  database: "mycompany",
});

module.exports = connection;
