var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(__dirname.split('/routes')[0] + "/views/about.html");
});

module.exports = router;
