const express = require('express');

let nextId = 1;

const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId++;
  grades[grade.id] = grade;
  res.status(201).json(grade);
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
