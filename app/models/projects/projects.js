var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var newProject = new Schema({

    title : {
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
//based on postal code ?
    location : {
        type: String,
        trim: true,
        required: "Address is required",
 
 
        validate: [
 
         function (input) {
           return input.length > 0;
         },
   
         "Location is required"
       ]
     },

     gigmaker : {
        type: Boolean,
        trim: true,
     },

     gigster : {
        type: Boolean,
        trim: true,
     },


     description : {
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

     compensation : {
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

     note: {
      type: Schema.Types.ObjectId,
      ref: "Note"
    },

     userCreated: {
        type: Date,
        default: Date.now
      },
})


var Project = mongoose.model("newProject", newProject);




module.exports = Project