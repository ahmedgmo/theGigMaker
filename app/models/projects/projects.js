const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectUserSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  approved: Boolean,
});

var ProjectSchema = new Schema({

  title: {
    type: String,
    trim: true,
    required: "Title is required",
    validate: [
      function (input) {
        return input.length > 0;
      },
      "A title is required"
    ]
  },
  //based on postal code  7 characters 6 characters plus space
  location: {
    type: String,
    trim: true,
    required: "Address is required",


    validate: [

      function (input) {
        return input.length <= 7;
      },

      "Location is required"
    ]
  },
  // default gigmaker 
  gigmaker:
  {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  // 0 to many gigsters
  gigster: [ProjectUserSchema],// [{user_id: 1, approved: false}, {user_id: 2, approved: true}]


  description: {
    type: String,
    trim: true,
    required: "Description is required",
    validate: [

      function (input) {
        return input.length <= 250;
      },

      "Location is required"
    ]
  },

  // iso format date
  startDate: {
    type: Date
  },

  // iso format date
  endDate: {
    type: Date,
  },


  duration: {
    start: Date
  },

  compensation: {
    type: Boolean,
    trim: true,
    required: "Description is required",


    validate: [
      function (input) {
        return input;
      },

      "This is a free collaboration"
    ]
  },


  userCreated: {
    type: Date,
    default: Date.now
  },
})


var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project; 