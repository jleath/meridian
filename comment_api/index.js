require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./controllers/comments');

const port = 3002;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (_, response) => {
  response.json({ info: 'Comment API starting point' });
});

app.get('/comments', async (_, response) => {
  const result = await db.getComments();
  response.json(result);
});

app.get('/comments/:id', async (request, response) => {
  const comments = await db.getCommentsById(Number(request.params.id));
  response.json(comments);
})

app.post('/comments', async (request, response) => {
  console.log(request.body);
  const result = await db.createComment(request.body);
  console.log(result);
  response.json(result);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

