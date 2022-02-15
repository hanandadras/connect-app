const ThoughtSchema = new Schema({
    thoughtText: { type: String, required: true, min:1, max:280},
    createdAt:{type: Date, default: Date.now, timestamps:true},

      
    username: { type: String, required: true, },
    
    reactions: [{type: string,}],
}

// Use Mongoose's ObjectId data type ?
// Default value is set to a new ObjectId ?
//1- reactionId 

reactionBody: {type: String, required: true, max:200},
username: {type:String},
 {required:true}, 
 {createdAt: timestamps:true},
 {Date: Date.now},

// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

    
// create the User model using the userSchema
const Thought = model('Thought', ThoughtSchema);

    // export the User model
module.exports = Thought;