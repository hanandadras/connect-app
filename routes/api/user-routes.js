const router = require('express').Router();
//import funtionality and hook it up to routes
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
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
  .delete(deletePizza);

module.exports = router;

// 18.1.7
