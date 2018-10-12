
const express = require('express');
const router = express.Router();
const db = require("../models/projects/index");

const Project = require('../controllers/project');



// Project Crud actions


// Create project



module.exports = function(router) {

    // Home route
    router.get("/", function(req,res){
     res.send("hello there!");
    });




    // All projects on the database for viewers to see

    router.get("/api/get-dbprojects", function (req, res){
        // var query = {}
        // if ( req.params.id) {
        //     query.id = req.params.id;
        // }

        Project.get( function( data){
        
            res.status(200).json(data);
        });
    });



    // User get access to all his 
    router.get("/api/savedProjects", function(req, res){
        // res.render("saved");
    });


    router.get("/api/savedCollaborations", function(req, res){
        query = req.body;
        Project.get(query);
    });



    // create new project (creator)
    router.post("/api/create-project", function (req, res){
        var query = req.body;
           Project.create(query, function (err, docs, data){
               console.log(docs);
               if (docs.result.ok == 1) {
                   console.log(data);
                    res.status(200).send('Project Created!');
               }
           })
        });



    // delete project (creator)
    router.delete("/api/delete-project", function (req, res){
        var query = {};
      
        query._id = req.body.id;
        console.log(query._id);
    
        Project.delete(query, function (err,data){
            if (data){
                res.status(200).send('project has been deleted');
            }

        });
    });


    // update content (creator)
    router.put("/api/update-project", function (req, res){
        Project.update(req.body, function (err, data){
            if (data){
                res.status(200).json("project has been updated");
            }

        });
    });




    // collaboration and button rendering
    // object from front end {}



    router.post("/api/project-collab-pending", function (req, res){
        console.log(req.body)
        var query = req.body;
        
        Project.collab(query, function(err, data){
            res.json(data);
        });
    });
    
}

