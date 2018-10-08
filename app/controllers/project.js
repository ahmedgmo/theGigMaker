

var Project = require("../models/projects/projects")

module.exports = {
    create : function (cb){
      Project.saved = true;
            
            Project.collection.insert(query, {ordered: false}, function(err,docs){
                // returns any errors without blocking the scraping
                cb(err,docs);
            });
    },

// users need to be validated at this point by the creator
collab : function(query,cb){
    Project.update({_id:query._id},{
       $push: { gigster : {userId : query.userId, approved:false} }
    }, {}, cb);
},


delete : function (query, cb){
    Project.remove(query,cb);
},
get: function (query, cb){
    Project.find(query)
    .sort({
        _id: -1
    })
    .exec(function(err,docs){
        cb(docs);
    })
},
update : function(query,cb){
    Project.update({_id:query._id},{
       $set:query 
    }, {}, cb);
    }
}

