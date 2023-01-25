const dataJSON = require('./data.json');

function read() {
  console.log(dataJSON.notes);
}

module.exports = read;
