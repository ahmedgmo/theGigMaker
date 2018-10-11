
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;


// const collaboratorSchema = new Schema({
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: "User"
//     },
//     approved: Boolean,
//   });






  var Collaborator = mongoose.model("ProjectCollaborator", collaboratorSchema);




  module.exports = Collaborator;