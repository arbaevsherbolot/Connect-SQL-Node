require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const connection = require("./connection/db");

app.use(express.json());

app.post("/create_table/:table_name", async (req, res) => {
  const table = req.params.table_name;

  connection.query(
    `CREATE TABLE ${table} (user VARCHAR(35), email VARCHAR(40), id INT PRIMARY KEY AUTO_INCREMENT)`
  );

  res.send(`Your table: ${table} (created)`);
});

app.post("/create_user/:table_name", async (req, res) => {
  const table = req.params.table_name;

  let result = await new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${table} VALUES ("${req.body.user}", "${req.body.email}", ${req.body.id});`,
      (err, data) => {
        if (!err) {
          resolve("Data is: ", data);
        } else {
          reject("Err is:", err);
        }
      }
    );
  });

  res.send(`Success!!!`);
});

const PORT = process.env.PORT || 2006;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
