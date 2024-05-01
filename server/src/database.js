// const mongoose = require('mongoose');
// const User = require('./models/user.model');

// const connection = 'mongodb://mongo:27017/dockerize-me';

// const connectDb = () => {
//   return mongoose.connect(connection);
// };

// module.exports = connectDb;

const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017/dockerize-me';

const connectDb = () => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("MongoDB connected successfully!");
  }).catch(err => {
    console.error("MongoDB connection error:", err);
  });
};

module.exports = connectDb;
