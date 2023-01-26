const express = require('express');
var app = express();

app.use(function (req, res) {
  res.send('<p>Hello There</p>');
});

app.listen(3000, () => {

});
