const router = require('express').Router();
const postController = require('../../controllers/postController');

// Matches with "/api/post"
router
  .route('/allposts') //get all posts
  .get(postController.findAll);
router
  .route('/newpost') //new post
  .post(postController.create);

// Matches with "/api/post/:id"
router
  .route('/post/:id')
  .get(postController.findById)
  // to add comments to the post
  // comments: [{ text: 'string', user: mongoose.Schema.Types.ObjectId }]
  .put(postController.update)
  .delete(postController.remove);

module.exports = router;
