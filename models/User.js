const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: { type: String, unique: true, required: true, Trim: true },
    email: { type: String, unique: true, required: true, },
    thought: [{ type: String, }],
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
    {
        toJSON: {
            virtuals: true,
            getters: true

        },
        id: false
    }
);


// create the User model using the userSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
