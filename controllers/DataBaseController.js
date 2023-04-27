const knex = require("../connections/db");

const get = async (req, res) => {
  try {
    const users = await knex("all_users").select();

    if (users) {
      res.json(users);
    } else if (users === []) {
      res.send("Users is not found");
    } else {
      res.send("Error 404");
    }
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  let { username, password } = req.body;

  if (username !== "" || password !== "") {
    const user = await knex("all_users")
      .where({ username: `${username}`, password: `${password}` })
      .select();

    res.send(user);
  } else {
    res.send("For all values, the field!");
  }
};

const post = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    if (username !== "" || email !== "" || password !== "") {
      const result = await knex("all_users").insert({
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
      });

      res.send("User created successfully!");
      console.log(result.json());
    } else {
      res.send("For all values, the field!");
    }
  } catch {
    res.send("User already exists!");
  }
};

const put = async (req, res) => {
  let { username } = req.body;

  try {
    if (username !== "") {
      const result = await knex("all_users")
        .where("username", req.params.username)
        .update({ username: `${username}` });

      res.send(`User updated successfully!, new username: ${username}`);
      console.log(result);
    } else {
      res.send(`For all values, the field!`);
    }
  } catch (err) {
    console.log(err);
    res.send(`Error updating user!`);
  }
};

module.exports = {
  get,
  getUser,
  post,
  put,
};
