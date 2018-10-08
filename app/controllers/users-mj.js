var User = require("../models/projects/user-mj")

module.exports = {
create : function (query, cb){
//   Project.saved = true;
    console.log(query);
    User.collection.insertOne(query, {ordered: false}, function(err,docs){
        // returns any errors without blocking the scraping

        cb(err,docs);
    });
},

// users need to be validated at this point by the creator


delete : function (query, cb){
    User.remove(query,cb);
},

get: function (query, cb){
    User.findOne({_id = query.userId})
    .sort({
        _id: -1
    })
    .exec(function(err,docs){
        cb(docs);
    })
},

update : function(query,cb){
    User.update({_id:query._id},{
       $set:{query} 
    }, {}, cb);
    }
}

