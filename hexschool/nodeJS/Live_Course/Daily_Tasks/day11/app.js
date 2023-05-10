// 引入 express 模組
const express = require('express');
const app = express();
// 指定 port，並使用 app 監聽
const port = 3000;
app.listen(port, () => {
    console.log(`on port ${port}`);
})
// 接收 GET request
app.get('/', (req, res) => {
    res.send('Hello World!');
})