var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'LAKME' , descr: 'LAKME is the best brand for consmetics' });
});

module.exports = router;
