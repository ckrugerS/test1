var express = require('express');
var app = express();






app.get('/', function (req, res) {
  res.send(parseInt(req.query.a) + parseInt(req.query.b));
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port' + process.env.PORT || 3000);
});
