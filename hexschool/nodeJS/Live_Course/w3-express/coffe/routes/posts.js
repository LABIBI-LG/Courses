var express = require('express');
var router = express.Router();
const Post = require('../models/postModels');


router.get('/', async function (req, res, next) {
    const posts = await Post.find();
    res.status(200).json({
        "data": posts
    })
});

router.post('/', async function (req, res, next) {
    console.log(req.body);
    const newPosts = await Post.create({
        name: req.body.name,
        content: req.body.content
    });
    res.status(200).json({
        status: "success",
        data: newPosts
    })
});

module.exports = router;
