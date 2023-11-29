const express = require('express');
const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/posts", feedController.getPosts);
router.post("/post", feedController.createPost);
router.get("/products", feedController.getProducts);


module.exports = router;