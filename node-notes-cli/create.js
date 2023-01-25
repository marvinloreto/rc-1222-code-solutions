const dataJSON = require('./data.json');
const fs = require('fs');

function create() {
  const noteNumber = dataJSON.nextId;
  dataJSON.notes[noteNumber] = process.argv[3];
  dataJSON.nextId++;
  const newNote = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', newNote, 'utf8', err => {
    if (err) throw err;
  });

}

module.exports = create;
