const express = require('express');
const dataJSON = require('./data.json');
const fs = require('fs');

const app = express();
const middlewareJSON = express.json();

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in dataJSON.notes) {
    notesArray.push(dataJSON.notes[property]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = dataJSON.notes[id];
  if (id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (note === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(note);
  }
});

app.use(middlewareJSON);

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const id = dataJSON.nextId;

  if (!newNote.content) {
    res.status(400).json({ error: 'content is needed' });
  } else {
    dataJSON.nextId++;
    newNote.id = id;
    dataJSON.notes[id] = newNote;
    const createdNote = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', createdNote, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).json(dataJSON.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = dataJSON.notes[id];
  if (id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (note === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete dataJSON.notes[id];
    const deletedNote = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', deletedNote, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const updateNote = req.body;
  if (id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!updateNote.content) {
    res.status(400).json({ error: 'content is needed' });
  } else if (dataJSON.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    updateNote.id = id;
    dataJSON.notes[id] = updateNote;
    const oldNote = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', oldNote, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(200).json(updateNote);
      }
    });
  }
});

app.listen(3000, () => {
  console.log('Listening on port Andre 3000!');
});
