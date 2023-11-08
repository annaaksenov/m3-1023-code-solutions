//import exp from 'constants';
import express from 'express';
import { arrayBuffer } from 'stream/consumers';
let nextId = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};
const grades: Record<number, Grade> = {};

const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const array: Grade[] = [];
  for (const x in grades) {
    array.push(grades[x]);
  }
  res.send(res.json(array));
});

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = {
    id: nextId++,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  grades[newGrade.id] = newGrade;
  res.send(res.json(newGrade));
})

app.listen(8080, () => console.log('server is listening'));
