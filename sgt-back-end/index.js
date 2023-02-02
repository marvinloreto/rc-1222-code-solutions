const express = require('express');
const app = express();
const middlewareJSON = express.json();

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
        select *
        from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradedId must be a positive integer' });
    return;
  }
  const sql = `
      select "gradeId",
              "name",
              "course",
              "score",
              "createdAt"
        from "grades"
        where "gradeId" = $1
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.use(middlewareJSON);

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  if (!name) {
    res.status(400).json({ error: 'name is required.' });
    return;
  }
  if (!course) {
    res.status(400).json({ error: 'course is required.' });
    return;
  }
  if (!score) {
    res.status(400).json({ error: 'score is required.' });
    return;
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'score must be a positive integer less than 100' });
    return;
  }
  const sql = `
        insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *
        `;
  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows;
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  if (!name) {
    res.status(400).json({ error: 'name is required.' });
    return;
  }
  if (!course) {
    res.status(400).json({ error: 'course is required.' });
    return;
  }
  if (!score) {
    res.status(400).json({ error: 'score is required.' });
    return;
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'score must be a positive integer less than 100' });
    return;
  }
  const sql = `
        update "grades"
        set "name" = $1,
            "course" = $2,
             "score" = $3
        where "gradeId" = $4
        returning *
        `;
  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradedId must be a positive integer' });
    return;
  }
  const sql = `
        delete
          from "grades"
          where "gradeId" = $1
          returning *
          `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port Andre 3000!');
});
