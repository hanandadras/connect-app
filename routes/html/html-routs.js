//DO I need 

const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'path.html'));
});

router.get('/add-user', (req, res) => {
//   res.sendFile(path.join(__dirname, 'path .html'));
});

router.get('/add-thought', (req, res) => {
    //   res.sendFile(path.join(__dirname, 'path .html'));
    });

router.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/user.html'));
});

router.get('/thought', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/thought.html'));
  });

module.exports = router;
