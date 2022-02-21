const { User } = require('../models');
//functions go as methods

//the find method (GET)
const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },



  // CREATE USER (POST)
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },



  //update user by id (PUT)


  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  //delete user (DELETE)
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },


  //create friend (POST)

  addFriend({ body }, res) {
    User.create(body)
      .then(dbFriendData => res.json(dbFriendData))
      .catch(err => res.status(400).json(err));
  },


  //delete friend (DELETE)

  deleteFriend({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbFriendData => {
        if (!dbFriendData) {
          res.status(404).json({ message: 'No Friend found with this id!' });
          return;
        }
        res.json(dbFriendData);
      })
      .catch(err => res.status(400).json(err));
  },
}


module.exports = userController;