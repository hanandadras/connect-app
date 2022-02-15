const router = require('express').Router();
//import funtionality and hook it up to routes
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/user
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
.router('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;
