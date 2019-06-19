var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  caption: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  display_src: String,
  likes: Number,
  comments: [{ text: 'string', user: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model('Post', postSchema);
