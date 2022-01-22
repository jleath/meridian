require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3003;
const db = require('./queries');

app.use(cors());
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
