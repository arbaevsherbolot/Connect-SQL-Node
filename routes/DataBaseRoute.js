const router = require("express").Router();
const {
  get,
  getUser,
  post,
  put,
} = require("../controllers/DataBaseController");

router.get("/get_users", get);
router.get("/get_user", getUser);

router.post("/post_users", post);

router.put("/users/:username", put);

module.exports = router;
