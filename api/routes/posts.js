const router = require("express").Router();
const { findById } = require("../models/Post");
const Post = require("../models/Post");

//CREATE Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("post does not exists");
  }
});

//UPDATE Post
router.put("/:id", async (req, res) => {
  try {
    const post = await findById(req.params.id);
    console.log(post.username === req.body.username);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.json(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Post
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status.json("User does not exists");
  }
});

module.exports = router;
