const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    required: () => {return this.email != ""},
  },

  password: {
    type: String,
    required: () => {return this.password != ""},
  },

  name: {
    type: String,
    // required: () => {return this.name != ""},
  },

  profilePic: {
    type: String,
    // required: () => {return this.profilePic != ""},
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
