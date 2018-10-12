
// Project controller

var Project = require("../models/projects/projects");

module.exports = {
    create : function (query, cb){
    //   Project.saved = true;
        
        return   Project.collection.insertOne(query, function(err,docs){

          
                // returns any errors without blocking the scraping

                cb(err,docs,query);
            });
    },

// users need to be validated at this point by the creator
collab : function(query,cb){
    Project.update({_id:query.id},{
       $push: { gigster : {userId : query.userId, approved:false} }
    }, {}, cb);
},


delete : function (query, cb){
    Project.deleteOne({_id:query.id},cb);
},
get: function (query,cb){
   
    Project.find(query)
    .sort({
        _id: -1
    })
    .exec(function(err,docs){
        cb(docs);
    })
},
update : function(query,cb){
    Project.updateOne({_id:query.id},{
       $set:query 
    }, {}, cb);
    }
}

