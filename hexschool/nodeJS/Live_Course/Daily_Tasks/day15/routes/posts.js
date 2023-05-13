var express = require('express');
var router = express.Router();
// model
const PostModel = require('../models/postModels');

router.get('/', async function (req, res, next) {
    const posts = await PostModel.find();
    res.status(200).json({
        status: "success",
        data: posts
    })
})
router.post('/', async function (req, res, next) {
    try{
        const newPosts = await PostModel.create({
            name: req.body.name,
            content: req.body.content
        })
        res.status(200).json({
            status: "success",
            data: newPosts
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            massing: err.message
        })
    }
    
})

module.exports = router;
