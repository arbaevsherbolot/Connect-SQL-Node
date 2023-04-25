const knex = require("../connections/db");

const get = async (req, res) => {
  try {
    const users = await knex("all_users").select();

    if (users) {
      res.json(users);
    } else {
      res.send("Error: No users");
    }
  } catch (err) {
    console.log(err);
  }
};

const post = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    const result = await knex("all_users").insert({
      username: `${username}`,
      email: `${email}`,
      password: `${password}`,
    });

    if (result) {
      res.send("User created successfully!");
    } else {
      res.send("User already exists!");
      å;
    }
  } catch (err) {
    console.log(err);
    res.send("Error creating user!");
  }
};

const put = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    const result = await knex("all_users")
      .where("username", req.params.username)
      .update({ username: `${username}` });

    if (result) {
      res.send(`User updated successfully!, new username: ${username}`);
    } else {
      res.send(`Error updating user!`);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  post,
  get,
  put,
};
