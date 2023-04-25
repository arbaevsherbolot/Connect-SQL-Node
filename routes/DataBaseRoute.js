const router = require("express").Router();
const { post, get, put } = require("../controllers/DataBaseController");

router.get("/get_users", get);

router.post("/post_users", post);

router.put("/users/:username", put)

module.exports = router;

