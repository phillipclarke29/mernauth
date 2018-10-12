const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  UserID: {
    type: Number,
    default: -1
  },
  TimeStamp: {
    type: Date,
    default: Date.now();
  },
  UserID: {
    type: Number,
    default: -1
  },
  IsDeleted: {
  type: Boolean,
  default: false
  }

});

module.exports = mongoose.model('UserSession',UserSessionSchema);
