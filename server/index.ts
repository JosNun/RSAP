/*

TODO: Webpack for production / dev (inline vs external source maps)


*/

import express from 'express';

const app = express();
// TODO: Pull this from environment variables
const PORT = 3000;

interface Random {
  thing: String;
}

const test: Random = {
  thing: 'Hi there!',
};

app.use(express.static(__dirname + '/app'));
console.log(__dirname);

// app.get('/', (req, res) => {
//   res.send('Something works!');
// });

console.log(test.thing);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
