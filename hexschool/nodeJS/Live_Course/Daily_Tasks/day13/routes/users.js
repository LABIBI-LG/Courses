var express = require('express');
var router = express.Router();
// 暫不連DB
const data = [];
// 新增
router.post('/', function (req, res, next) {
  try {
    data.push(req.body);
    res.status(200).json({
      "status": 'success',
      "data": data
    });
  } catch (err) {
    res.status(400).json({
      "status": 'fail',
      "message": err
    });
  }
});
// 修改
router.patch('/:id', function (req, res, next) {
  const id = req.params.id;
  const name = req.body.name;
  try {
    data.forEach(item => {
      if(item.id === id ){
        item.name = name;
      }
    });
    res.status(200).json({
      "status": 'success',
      "data": data
    });
  } catch (err) {
    res.status(400).json({
      "status": 'fail',
      "message": err
    });
  }
});

module.exports = router;
