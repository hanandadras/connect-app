const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/connect-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);


//add app.listen

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

//module.exports = mongoose.connection