const read = require('./read');
const create = require('./create');
const deleteNote = require('./delete');
const update = require('./update');

const command = process.argv[2];

if (command === 'read') {
  read();
} else if (command === 'create') {
  create();
} else if (command === 'delete') {
  deleteNote();
} else if (command === 'update') {
  update();
}
