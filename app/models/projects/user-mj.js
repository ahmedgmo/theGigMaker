var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var UserSchema = new Schema({
 
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
 
  userCreated: {
    type: Date,
    default: Date.now
  },



  // if collaboration is true populate the user info to the creator
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ],

  collaborations: [
    {
      type: Schema.Types.ObjectId,
      ref: "ProjectCollaborator"
    }
  ]
});

// Custom Instance Methods
// UserSchema.methods.collaborate = function() {
//   // Adds "...theCoolest" to the end of the current user's username
//   this.username = this.username + "Wants to Collaborate!";
//   // Return the new username
//   return this.username;
// };


var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;