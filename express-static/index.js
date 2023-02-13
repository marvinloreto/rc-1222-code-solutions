const express = require('express');
const path = require('path');

const app = express();

const newPath = path.join(__dirname, 'public');

const staticMiddleware = express.static(newPath);
app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Listening on port Andre 3000!');
});
