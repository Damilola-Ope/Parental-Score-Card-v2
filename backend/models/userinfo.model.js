const mongoose = require('mongoose');

const UserinfoShema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    //this is an object that mongoDB uses to automatically generate
    timestamps:true,
  }
)


//allowing mongoDB to recognize this as a model
const User = mongoose.model("Userinfo", UserinfoShema);

module.exports = User;