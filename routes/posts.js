const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

/*
 * post.save().then(data => {
 *     res.json(data);
 *   })
 *  .catch(err => {
 *    res.json({ message: err });
 *  });
 */

//Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    console.log({ message: err });
  }
});

//Delete Specific Post
router.delete("/:postId", async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId });
    res.json(deletePost);
  } catch (err) {
    console.log({ message: err });
  }
});

//Update post
router.patch("/:postId", async (req, res) => {
  try {
    const patchPost = await Post.updateOne({ _id: req.params.postId });
  } catch (err) {
    console.log({ message: err });
  }
});
module.exports = router;
