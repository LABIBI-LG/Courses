# Day 2 - 非同步概念、使用 Promise
> 2023/03/25 完成
> [連結](main.js)
## 題目

請嘗試使用 Promise 的鏈式寫法 `.then()` `.catch()` 執行以下函式<br>
執行流程：
批改作業 → 檢查獎勵 → 給予獎勵 `.then()` → 退學或懲罰 `.catch()`

```js
// 批改作業
function correctTest(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.round(Math.random()*100);
      if(score >= 20) {
        resolve({
          name,
          score
        })
      } else {
        reject("您已達退學門檻")
      }
    }, 2000)
  })
}
// 檢查獎勵
function checkReward(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data.score >= 90) {
        resolve(`${data.name} 獲得電影票`);
      } else if (data.score >= 60 && data.score < 90) {
        resolve(`${data.name} 獲得嘉獎`);
      } else {
        reject(`您沒有獎品`)
      }
    }, 2000)
  })
}

// 執行函式
/* 在此填寫答案*/
```

