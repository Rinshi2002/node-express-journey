var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const name = ["Rinshi","Izza","Ashbin"];

  const person = {name :"rinshi", comments :{Comment :'hello guys', date :'19-06-24'}, admin:true};

  
  res.render('index', {person});
});

module.exports = router;
