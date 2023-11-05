// import express, { Request, Response } from 'express';

// const app = express();

// app.use(function(req: Request, res: Response) {
//   console.log(req.originalUrl);
//   res.send('Hello again');
// });

// app.listen(8080, () => {console.log('Server is listening')});

import express from 'express';
const app = express();
app.use(function (req, res) {
  console.log(req.originalUrl);
  res.send('Hello again');
});
app.listen(808, () => {
  console.log('Server is listening');
});
