const Post = require("../models/post");
const createPath = require("../helper/create-path");

const getHome = (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
};

const getPost = (req, res) => {
  const title = "Post";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("post"), { post, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const deletePost = (req, res) => {
  const title = "Post";
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const getEditPost = (req, res) => {
  const title = "Edit Post";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("edit-post"), { post, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const putEditPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/posts/${id}`))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const getPosts = (req, res) => {
  const title = "Posts";
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath("posts"), { posts, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const postPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((result) => res.redirect("/posts"))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
};

const getAddPost = (req, res) => {
  const title = "Add Post";
  res.render(createPath("add-post"), { title });
};

module.exports = {
  getHome,
  getPost,
  deletePost,
  getEditPost,
  putEditPost,
  getPosts,
  postPost,
  getAddPost,
};
