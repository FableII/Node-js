const express = require("express");
const router = express.Router();
const {
  getHome,
  getPost,
  deletePost,
  getEditPost,
  putEditPost,
  getPosts,
  postPost,
  getAddPost,
} = require("../controller/post-controller");

router.get("/", getHome);
router.get("/posts/:id", getPost);
router.delete("/posts/:id", deletePost);
router.get("/edit/:id", getEditPost);
router.put("/edit/:id", putEditPost);
router.get("/posts", getPosts);
router.post("/add-post", postPost);
router.get("/add-post", getAddPost);

module.exports = router;
