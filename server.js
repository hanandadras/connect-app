const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

// app.get('/', function (req, res) {
//   res.render('index', {});
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/connect-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("connection successful"))
.catch((error)=>console.error(error))
// Use this to log mongo queries being executed!
mongoose.set('debug', true);


//add app.listen

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

module.exports = mongoose.connection