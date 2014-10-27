var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  res.send('aa');
});

module.exports = router;
