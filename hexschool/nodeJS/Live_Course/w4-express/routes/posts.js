var express = require('express');
var router = express.Router();
const Post = require('../models/postModels');
const User = require('../models/usersModels');

router.get('/', async function (req, res, next) {
    const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt";
    console.log('timeSort',timeSort);
    const q = req.query.q !== undefined ? { "content": new RegExp(req.query.q) } : {};
    const posts = await Post.find(q).populate({
        path: 'user',
        select: 'name photo '
    }).sort(timeSort);
    // asc 遞增(由小到大，由舊到新) createdAt ; 
    // desc 遞減(由大到小、由新到舊) "-createdAt"
    res.status(200).json({
        "data": posts
    })
});

router.post('/', async function (req, res, next) {
    console.log(req.body);
    const newPosts = await Post.create({
        user: req.body.user,
        content: req.body.content
    });
    res.status(200).json({
        status: "success",
        data: newPosts
    })
});

module.exports = router;
