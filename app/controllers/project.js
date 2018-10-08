

var Project = require("../models/projects/projects")

module.exports = {
    create : function (query, cb){
    //   Project.saved = true;
            console.log(query);
            Project.collection.insertOne(query, {ordered: false}, function(err,docs){
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
    Project.remove({_id:query._id},cb);
},
get: function (query, cb){
    Project.find({},{$where:{query}})
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

