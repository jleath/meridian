const commentsRouter = require('express').Router();
const Comment = require('../models/Comment');
const SlackPostMessage = require('../models/SlackPostMessage');

commentsRouter.get('/', async(_, response) => {
  const result = await Comment.find({});
  response.json(result);
});

commentsRouter.get('/:id', async (request, response) => {
  const comments = await Comment.find({'dsoId': Number(request.params.id)});
  response.json(comments);
});

commentsRouter.post('/', async (request, response) => {
  const commentData = {
    dsoId: request.body.dsoId,
    comment: request.body.comment,
  };
  const slackPostData = {
    dsoName: request.body.dsoName,
    comment: request.body.comment,
  };
  await new SlackPostMessage(slackPostData).save();
  const result = await new Comment(commentData).save();
  response.status(201).json(result);
});

module.exports = commentsRouter;