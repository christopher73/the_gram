const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: String, required: true },
  picture: String,
  likes: { type: Number },
  date: { type: Date, default: Date.now }
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
