
# Day 12 - 設計基本路由
> 2023/05/10 完成
> [連結](app.js)
## 題目
---
>參考最終作業設計稿頁面，設計當使用者造訪以下頁面（GET）時的路由， response 可先回傳一段簡單的文字即可

- 登入
- 註冊
- 全體動態牆
- 個人牆
- 個人追蹤名單
範例
```javascript
app.get('/login', (req, res) => {
  res.send('歡迎來到登入頁')
})
```
