var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.status(501).send(`oh shit something's not right`);
});

module.exports = router;
