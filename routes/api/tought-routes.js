const router = require('express').Router();
//import functionality and hook it up to routes

const {
  getAllTought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');



// Set up GET all and POST at /api/tought
router
  .route('/')
  .get(getAllThought)
  .post(CreateThought);

// Set up GET one, PUT, and DELETE at /api/tought/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;