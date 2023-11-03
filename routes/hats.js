var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hats', { title: 'Hat Search Results' });
});

module.exports = router;
