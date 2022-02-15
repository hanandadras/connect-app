const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
      type: String, Required, Trimmed
    },
//     createdBy: {
//       type: String
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now
//     },
//     size: {
//       type: String,
//       default: 'Large'
//     },
//     toppings: []
//   }
//   email: {
//     type: String, Unique, Required, Trimmed
//   },
//   thoughts: {
//     type: []
// }
  


// create the User model using the userSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;

