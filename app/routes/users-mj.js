
const express = require('express');
const router = express.Router();
const db = require("../models/projects/index")

const User = require('../controllers/users-mj')




module.exports = function(router) {
// see all user  saved Projects 
router.get("/api/createdProjects", function (req, res) {
    var query = req.body;
    User.get(query, function (err, data) {
        if (data.result.ok) {
            res.status(200).send('Here are your created projects');
        } else {
            console.log(err);
        }
    });
});


// see all user collaborations 
router.get("/api/savedCollaborations", function (req, res) {
    var query = req.body;
    User.get(query, function (err, data) {
        if (data) {
            res.json(data);
            res.status(200).send('Your collaboration are :' + data.result);
        } else {
            console.log(err);
        }
    });
});



// Create User
router.post("/api/create-user", function (req, res) {
    var query = req.body;
    User.create(query, function (err, data) {
        if (data) {
         
            res.status(200).json(data);

        } else {
            console.log(err);
        }
    })
});



// delete user
router.delete("/api/delete-project/:id", function (req, res) {
    var query = {};
    query._id = req.params.id;
    User.delete(query, function (err, data) {
        if (data.result.ok) {
            res.status(200).send('User Deleted!');
        } else {
            console.log(err);
        }
    });
});


// update user info
router.put("/api/update-project", function (req, res) {
    Project.update(req.body, function (err, data) {
        if (data.result.ok) {
            res.status(200).send('User updated!');
           } else {
               console.log(err);
           }

    });
});


// get user specific information or all users
router.get("/api/project:project_id?", function (req, res) {
    var query = {};
    if (req.params.project_id) {
        query._id = req.params.project_id;
    }
    Project.get(query, function (err, data) {
        if (data.result.ok) {
            res.json(data);
            res.status(200).send('User Search was a success!');
        
           } else {
               console.log(err);
           }
     
    });
});

}