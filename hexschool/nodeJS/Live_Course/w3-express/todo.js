const express = require('express');
const app = express();


app.get('/',function(req,res){
    // 取得網址參數
    console.log(req.query);
    res.status(200).json({
        "name":"洧杰"
    })
})

app.post('/todo',function(req,res){
    // 取得網址參數
    console.log(req.body);
    res.status(200).json({
        "name":"洧杰"
    })
})

app.delete('/todo/:id',function(req,res){
    // 取得動態路由(會對應到id上)
    console.log(req.params);
    res.status(200).json({
        "name":"刪除成功"
    })
})

// 監聽 port
const port = process.env.PORT || 3000;
app.listen(port);