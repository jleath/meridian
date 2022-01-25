const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  dsoId: Number,
  comment: String
});

CommentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Comment', CommentSchema);