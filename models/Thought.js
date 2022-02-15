const {schema, model, Types, Schema} = require('mongoose';)

const ThoughtSchema = new Schema({
    thoughtText: { type: String, required: true, min:1, max:280},
    createdAt:{type: Date, default: Date.now, timestamps:true},
    username: { type: String, required: true, },
    reactions: [{type: string,}],
}

const reactionSchema = new Schema({

reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
},
reactionBody: {
    type: string,
    required: true,
    maxlength:280,
},

username:{
    type: string,
    required, true,
},

// add Day.js?
CreatedAt: {
    type: Date,
    default: Date.now,
}

})
    // export the User model
module.exports = Thought;