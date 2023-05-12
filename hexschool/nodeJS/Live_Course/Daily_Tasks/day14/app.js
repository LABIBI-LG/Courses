
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/products', function (req, res) {
    // 取出參數
    const query = req.query;
    res.status(200).json({
        status: 'success',
        data: query
    });
});