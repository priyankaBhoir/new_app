var express = require('express');
var router = express.Router();
var nodeSecurity = require('nodesecurity');

/* GET home page. */
router.get('/' ,function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/login',nodeSecurity.validate,function(req, res) {
    res.render('index', { title: 'Express' });
});
module.exports = router;
