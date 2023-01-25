const dataJSON = require('./data.json');
const fs = require('fs');

function update() {
  dataJSON.notes[process.argv[3]] = process.argv[4];
  const updatedNote = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', updatedNote, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = update;
