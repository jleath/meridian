const mongoose = require('mongoose');

const SlackPostMessageSchema = new mongoose.Schema({
  comment: String,
  dsoName: String,
});

SlackPostMessageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('SlackPostMessage', SlackPostMessageSchema);