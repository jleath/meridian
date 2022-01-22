const Comment = require('../models/Comment');
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/dso_comments';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const getComments = async () => {
  const result = await Comment.find({});
  return result;
};

const getCommentsById = async (id) => {
  const result = await Comment.find({'dsoId': id});
  return result;
}

const createComment = async (body) => {
  const newComment = new Comment(body);
  await newComment.save();
};

module.exports = {
  createComment,
  getComments,
  getCommentsById,
};