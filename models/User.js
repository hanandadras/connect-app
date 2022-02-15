const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String, Unique, Required, Trimmed
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },




    email: {
        type: String, Unique, Required, Trimmed
    },


    thoughts: {
        type: []
    }



// create the User model using the userSchema
const User = model('User', UserSchema);

    // export the User model
    module.exports = User;
