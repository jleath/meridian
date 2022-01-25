const commentsRouter = require('express').Router();
const Comment = require('../models/Comment');

commentsRouter.get('/', async(_, response) => {
  const result = await Comment.find({});
  response.json(result);
});

commentsRouter.get('/:id', async (request, response) => {
  const comments = await Comment.find({'dsoId': Number(request.params.id)});
  response.json(comments);
});

commentsRouter.post('/', async (request, response) => {
  const result = await new Comment(request.body).save();
  response.status(201).json(result);
});

module.exports = commentsRouter;