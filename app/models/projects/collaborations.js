
const mongoose = require('mongoose');


const collaboratorSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    approved: Boolean,
  });






  var Collaborator = mongoose.model("ProjectCollaborator", collaboratorSchema);




  module.exports = Collaborator;