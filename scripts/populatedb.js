'use strict';
var mongoose = require('mongoose');
var { User, Post } = require('../models');
var users = require('./data/users');
var posts = require('./data/post');
// make a connection
//db connections
// const models = require('./models');
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the_gram';
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log(`Connected to ${MONGODB_URI}`))
  .catch(err => console.log(err));
// get reference to database

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection Successful!');

  // define Schema

  // compile schema to model

  // a document instance
  //save model to database
  // console.log(posts);
  // for (var i = 0; i < users.length; i++) {
  //   var newUser = new User(users[i]);
  //   newUser.save(function(err, users) {
  //     if (err) return console.error(err);
  //     console.log(users.username + ' saved to USER collection.');
  //   });
  // }
  for (var i = 0; i < posts.length; i++) {
    var newPost = new Post({
      caption: posts[i].caption,
      postedBy: posts[i].postedby,
      dateCreated: posts[i].dateCreated,
      display_src: posts[i].display_src,
      likes: posts[i].likes,
      comments: posts[i].comments
    });
    newPost.save(function(err, posts) {
      if (err) return console.error(err);
      console.log(posts.caption + ' saved to POST collection.');
    });
  }
  // var newPost = new Post({
  //   caption: 'Lunch #hamont',
  //   postedby: '"5d086f58d3a2b1973b5df366',
  //   dateCreated: Date.now(),
  //   display_src: `https://picsum.photos/400/400/?image=${Math.floor(
  //     Math.random() * 85
  //   )}`,
  //   likes: 56,
  //   comments: [
  //     {
  //       text: 'Wes. WE should have lunch.',
  //       user: '5d086f58d3a2b1973b5df367'
  //     },
  //     {
  //       text: '#adults',
  //       user: '5d086f58d3a2b1973b5df367'
  //     },
  //     {
  //       text: '@jdaveknox yes!',
  //       user: '5d086f58d3a2b1973b5df367'
  //     },
  //     {
  //       text: '😍 love Hamilton!',
  //       user: '5d086f58d3a2b1973b5df367'
  //     }
  //   ]
  // });
  newPost.save(function(err, posts) {
    if (err) return console.error(err);
    console.log(posts._id + ' saved to POST collection.');
  });
});
