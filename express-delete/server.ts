import express from 'express';
type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

const app = express();
app.get('/api/grades', (req, res) => {
  const gradeArray: Grade[] = [];
  for (const id in grades) {
    gradeArray.push(grades[id]);
  }
  res.send(res.json(gradeArray));
});

app.listen(8080, () => console.log('server is listening'));

app.delete('/api/grades/:id', (req, res) => {
  const deleteID = parseInt(req.params.id);
  if (grades[deleteID]) {
  delete grades[deleteID];
  res.sendStatus(204).send('Deleted.');
  } else {
    res.sendStatus(404).send('Error when deleting.')
  }
});
