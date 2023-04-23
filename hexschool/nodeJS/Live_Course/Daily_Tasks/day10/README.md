
# Day 10 - 拆分 Model
嘗試將此[檔案](https://drive.google.com/drive/folders/1oRjCzs3OajeUXVroNO6QS7fNomO1hwZ0)的 Model 拆分到 models 資料夾，並引入 server.js 做使用
並附上拆分後的 models 程式碼以及將 models 引入 server.js 的程式碼

### models 資料夾 - posts.js
---
```js
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, '產品名稱未填寫']
    },
    price: {
        type: Number,
        required: [true, '價錢未填寫']
    },
    ice: {
        type: String,
        default: "正常冰"
    },
    sugar: {
        type: String,
        default: "全糖"
    },
    toppings: [{
        type: String,
        enum: ["珍珠", "椰果", "粉條"],
        default: '',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        select: false
    },

}, {
    versionKey: false,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
```

### server.js
---
```js
const http = require("http");
const mongoose = require('mongoose');
const Post = require('./models/posts.js');
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
  console.log('資料庫連線成功')
})
.catch((error)=>{
  console.log(error);
});


/**-----Day10主要程式------ */
Post.create({
  product: '鮮奶茶',
  price: 56,
  sugar: '半糖'
},{
  product: '烏龍鮮奶茶',
  price: 60,
  sugar: '微糖'
},{
  product: '四季春茶',
  price: 30,
  sugar: '少糖',
  ice: "去冰"
})
.then(()=> console.log('成功'))
.catch((err)=>console.log(err))

/**---------------------- */

const requestListener = async (req,res)=>{
  let body = "";
  req.on('data',chunk=>{
      body+=chunk;
  })
  const headers = {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
      'Content-Type': 'application/json'
  }
  if(req.url=="/drinks" && req.method=="GET"){
      const drinks = await Drink.find();
      res.writeHead(200,headers);
      res.write(JSON.stringify({
          "status":"success",
          drinks
      }))
      res.end()
  }else if(req.url=="/drinks" && req.method=="POST"){
      req.on('end', async()=>{
          try{
              const data = JSON.parse(body);
              const newDrink = await Drink.create(
                  {
                    product: data.product,
                    price: data.price,
                    toppings: data.toppings,
                  }
              )
              res.writeHead(200,headers);
              res.write(JSON.stringify({
                  "status":"success",
                  drinks: newDrink
              }))
              res.end()
          }catch(error){
              res.writeHead(400,headers);
              res.write(JSON.stringify({
                  "status": "false",
                  "message":"欄位沒有正確，或沒有此 ID",
                  "error": error
              }))
              res.end()
          }
      })
  }
  else if(req.url=="/drinks" && req.method=="DELETE"){
      await Drink.deleteMany({});
      res.writeHead(200,headers);
      res.write(JSON.stringify({
          "status":"success",
          drinks:[]
      }))
      res.end();
  }
  else if(req.method == "OPTIONS"){
      res.writeHead(200,headers);
      res.end();
  }else{
      res.writeHead(404,headers);
      res.write(JSON.stringify({
          "status": "false",
          "message": "無此網站路由"
      }));
      res.end();
  }
}

const server = http.createServer(requestListener);
server.listen(3005);
```