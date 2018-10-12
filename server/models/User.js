const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
  type: String,
  default: ''
  },
  LastName: {
  type: String,
  default: ''
  },
  email: {
  type: String,
  default: ''
  },
  password: {
  type: String,
  default: ''
  },
  Role: {
  type: String,
  default: 'User'
  },
  IsDeleted: {
  type: Boolean,
  default: false
  },

});

UserSchema.methods.generateHash = Function(password){
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = Function(password){
  bcrypt.compareSync(password, this.password);
}



module.exports = mongoose.model('User', UserSchema);
