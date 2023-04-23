const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, 'Content 未填寫']
        },
        image: {
            type: String,
            default: ""
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false
        },
        user: {
            type: mongoose.Schema.ObjectId, //抓id資訊
            ref: "user", // 確認連到哪個models
            required: [true, '貼文姓名未填寫']
        },
        likes: {
            type: Number,
            default: 0
        }
    }
);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;