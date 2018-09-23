/*

TODO: Webpack for production / dev (inline vs external source maps)


*/

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
// TODO: Pull this from environment variables
const PORT = 3000;

interface Random {
  thing: String;
}

const test: Random = {
  thing: 'Hi there!',
};

const jsonParser = bodyParser.json();

app.post('/add-team', jsonParser, (req, res) => {
  console.log(req.body);
  const teamNum = req.body.teamNum;

  console.log(`Ding Ding! Info from team ${teamNum} arrived!`);
  res.send('dankè!');
});

app.use(express.static(__dirname + '/app'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('Something works!');
// });

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
