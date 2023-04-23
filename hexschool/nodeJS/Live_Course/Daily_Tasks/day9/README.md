
# Day 9 - Mongoose 修改／刪除
延續 Day6 - 7 每日任務，嘗試修改、刪除手搖飲 documents

### 1. 尋找一筆 document 並將 ice 改為 去冰，sugar 改為 半糖
---
```js
Drink.updateOne(
  { product: "烏龍鮮奶茶" },
  {
    "ice": "去冰",
    "sugar": "半糖"
  }
).then(() => {
  console.log("修改資料成功");
})
  .catch((error) => {
    console.log(error);
  });
```

### 2. 以 ID 尋找一筆 document 並將其刪除
---
```js
Drink.findByIdAndDelete("64454dfab9d331f70fc60959")
  .then(() => {
    console.log("刪除成功");
  })
  .catch((error) => {
    console.log(error);
  });
```

### 3. 刪除全部 documents
---
```js
Drink.deleteMany({})
  .then(() => {
    console.log("刪除成功");
  })
  .catch((error) => {
    console.log(error);
  });
```