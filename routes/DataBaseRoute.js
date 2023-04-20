const router = require("express").Router();

const knex = require("../connection/db");

router.get("/get_users", async (req, res) => {
  try {
    const users = await knex("all_users");

    res.json(users);
  } catch (err) {
    trow(err);
  }
});

router.post("/post_users", async (req, res) => {
  const { username, email } = req.body;

  try {
    await knex("all_users").insert({
      username: `${username}`,
      email: `${email}`,
    });

    res.send("User created successfully");
    console.log(`NEW USER: ${username} created successfully...`);
  } catch (err) {
    trow(err);
  }
});

module.exports = router;
