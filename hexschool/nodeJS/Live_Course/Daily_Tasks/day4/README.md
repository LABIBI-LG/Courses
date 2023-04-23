
### 0. 將以下資料新增至 students collection
---
建立/切換資料庫
```powershell
use day4
```
建立`students` collection 並且新增多筆資料
```powershell
db.students.insertMany(
    [
        {
            "studentName": "Riley Parker",
            "group": "A",
            "score": 83,
            "isPaid": false
        },
        {
            "studentName": "Brennan Miles",
            "group": "C",
            "score": 72,
            "isPaid": false
        },
        {
            "studentName": "Mia Diaz",
            "group": "B",
            "score": 98,
            "isPaid": true
        },
        {
            "studentName": "Caroline morris",
            "group": "B",
            "score": 55,
            "isPaid": false
        },
        {
            "studentName": "Beverly Stewart",
            "group": "B",
            "score": 60,
            "isPaid": false
        }
    ]
)
```

### 1. 指定其中一個 `_id` ，並將該筆 document 的 `group` 改為 D
---
```powershell
db.students.updateOne(
    {
        _id: ObjectId("6444f9a3631b8555fc347df6")
    },
    {
        $set: {
            group: "D"
        },
        $currentDate: {
            lastModified: true
        }
    }
)
```
### 2. 將 `group` 為 B 的多筆 document 的 `isPaid` 改為 `true`
---
```powershell
db.students.updateMany(
    { group:"B" },
    {
        $set: {
            isPaid: "true"
        },
        $currentDate: {
            lastModified: true
        }
    }
)
```
### 3. 將 `studentName` 包含關鍵字 `Brennan` 的 document 刪除
---
```powershell
db.students.deleteMany(
    { "studentName" : /Brennan/ },
)
```

### 4. 將 `isPaid` 為 `true` 的多筆 document 刪除
---
```powershell
db.students.deleteMany(
    { "isPaid" : "true" },
)
```