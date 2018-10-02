

var Projects = require("../models/projects/projects")

module.exports = {
    create : function (cb){
      Projects.saved = true;
            
            Projects.collection.insert(query, {ordered: false}, function(err,docs){
                // returns any errors without blocking the scraping
                cb(err,docs);
            });
    },
delete : function (query, cb){
    Projects.remove(query,cb);
},
get: function (query, cb){
    Projects.find(query)
    .sort({
        _id: -1
    })
    .exec(function(err,docs){
        cb(docs);
    })
},
update: function(query,cb){
    Articles.update({_id:query._id},{
       $set:query 
    }, {}, cb);
    }
}

