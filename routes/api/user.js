const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/new_user"
router
  .route('/new_user') //for new user
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route('/user/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
