import pg from 'pg';
import  express  from 'express';

type Grade = {
  name: string;
  course: string;
  score: number;
};
const grades: Record<number, Grade> = {};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());
app.get('/api/grades', async (req, res, next) => {
  try {
    const result = await db.query<Grade>('select * from grades');
    res.status(200).json(result.rows);
} catch (err) {
  next(err)
}
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const newGrade: Grade = {
      name: req.body.name,
      course: req.body.course,
      score: req.body.score
    }
    const sql = 'insert into grades(name, course, score) values($1, $2, $3) returning *';
    const values = [newGrade.name, newGrade.course, newGrade.score];
    const result = await db.query<Grade>(sql, values);
    const createdGrade = result.rows[0];
    res.status(201).json(createdGrade);
  } catch (err) {
    next(err)
  }
})

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const updatedGrade: Grade = {
      name: req.body.name,
      course: req.body.course,
      score: req.body.score,
    };
    const sql = 'UPDATE grades SET name = $1, course = $2, score = $3 WHERE "gradeId" = $4 RETURNING *';
    const values = [updatedGrade.name, updatedGrade.course, updatedGrade.score, gradeId];
    const result = await db.query<Grade>(sql, values);
    const newUpdatedGrade = result.rows[0];
    res.status(200).json(newUpdatedGrade);
  } catch (err) {
    next(err);
  }
})

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
   const sql = 'delete from grades where "gradeId" = $1 returning *';
   const values = [gradeId];
   const result = await db.query<Grade>(sql, values);
   const deletedGrade = result.rows[0]
    res.status(204).json(deletedGrade);
  } catch (err) {
    next(err);
  }
})

app.listen(8080, () => { console.log('Server is listening.') });
