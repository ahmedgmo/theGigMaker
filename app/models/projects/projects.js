var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProjectUser = new Schema({

  approved : Boolean,
  userId : {
    type: object.types.ObjectId,
    ref: "User"}
})

var Project = new Schema({

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
// default hig
     gigmaker : 
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }, 
  
        // 0 to many gigsters
     gigster :[ ProjectUser ],// [{user_id: 1, approved: false}, {user_id: 2, approved: true}]


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

     saved : {
      type : Boolean,
      
     },

     // iso format date
       start: {
         type: new Date(),

       },

       // iso format date
       ending: {
         type: new Date(),
       },


       duration: {
         start: new Date() 
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

  

     userCreated: {
        type: Date,
        default: Date.now
      },
})


var Project = mongoose.model("Project", Project);




module.exports = Project