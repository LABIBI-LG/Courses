// 引入 express 模組
const express = require('express');
const app = express();
// 指定 port，並使用 app 監聽
const port = 3000;
app.listen(port, () => {
    console.log(`on port ${port}`);
})
// 登入
app.get('/login', (req, res) => {
    res.send('登入頁')
})
// 註冊
app.get('/register', (req, res) => {
    res.send('註冊頁')
})
// 全體動態牆
app.get('/posts', (req, res) => {
    res.send('全體動態牆頁')
})
// 個人牆
app.get('/personal/:id', (req, res) => {
    const id = req.params.id;
    res.send(` ${id} 個人牆`)
})
// 個人追蹤名單
app.get('/tracking/:id', (req, res) => {
    const id = req.params.id;
    res.send(` ${id} 個人追蹤名單`)
})
