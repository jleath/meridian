require('dotenv').config();
console.log(process.env);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/',(_, response) => {
  response.json({ info: 'Messier API starting point' });
});

app.post('/dsos', db.createDso);
app.get('/dsos', db.getDsos);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
