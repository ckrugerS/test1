var express = require('express');
var app = express();






app.get('/', function (req, res) {
  res.send(req.query.a + req.query.b);
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port' + process.env.PORT || 3000);
});
