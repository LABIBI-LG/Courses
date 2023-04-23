
### 1. 請建立一個 database（名稱可自定義），並建立一個 `students` collection
---
建立/切換資料庫
```powershell
use day3
```
建立`students` collection 並且新增一筆資料
```powershell
db.students.insertOne(
	{
        "studentName": "Riley Parker",
        "group": "A",
        "score": 83,
        "isPaid": false
    }
)
```

### 2. 依以下格式一次新增多筆 document 到 `students` collection
---
```powershell
db.students.insertMany(
    [
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
### 3. 查詢 `students` collection 中的所有資料
---
```powershell
db.students.find()
```
### 4. 查詢 students collection 中符合 group 屬性為 B 的資料 使用 `{ <field>: <value> }` 設定符合的項目
---
```powershell
db.students.find({ "group" : "B" })
```
### 5. 查詢 `students` collection 中符合分數在 60 分以上的的資料
---
**$gte 大於等於**
```powershell
db.students.find(
    {
        "score" :  { $gte:60 }
    }
)
```
### 6. 查詢 `students` collection 中符合分數在 60 分以下或是 group 為 B 的資料
---
**$lt 小於**
```powershell
db.students.find(
    {
        "score" :  { $lt:60 },
        "group" : "B"
    }
)
```