const dataJSON = require('./data.json');
const fs = require('fs');

function deleteNote() {
  delete dataJSON.notes[process.argv[3]];
  const deletedNote = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', deletedNote, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = deleteNote;
