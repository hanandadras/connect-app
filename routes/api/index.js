const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `/user` to routes created in `userroutes.js`
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;