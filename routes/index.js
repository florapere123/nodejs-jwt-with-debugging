var express = require('express');
var router = express.Router();

/* GET home page. MAIN */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express of Hung !' });
});
 
module.exports = router;
