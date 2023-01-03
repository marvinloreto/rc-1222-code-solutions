var array = [
  {
    isbn: '0747538492',
    book: 'Harry Potter and the Chamber of Secrets',
    author: 'JK Rowling'
  },
  {
    isbn: '0747542155',
    book: 'Harry Potter and the Prisoner of Azkaban',
    author: 'JK Rowling'
  },
  {
    isbn: '074754624',
    book: 'Harry Potter and the Goblet of Fire',
    author: 'JK Rowling'
  }
];

console.log('type before JSON:', typeof array);

var library = JSON.stringify(array);

console.log('type after stringify:', typeof library);

var string = JSON.stringify({
  studentName: 'Marvin Loreto',
  studentId: 2222829
});

console.log('type of:', typeof string);

var object = JSON.parse(string);

console.log('type of after parse:', typeof object);
