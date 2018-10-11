
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


    // saved projects route
    router.get("/api/savedProjects", function(req, res){
        // res.render("saved");
    });


    router.get("/api/savedCollaborations", function(req, res){
        Project.get()
    });



    // create new project (creator)
    router.post("/api/create-project", function (req, res){
        var query = req.body;
           Project.create(query, function (err, data){
               if (data) {
                res.status(200).send('Project Created!');
               }
           })
        });



    // delete project (creator)
    router.delete("/api/delete-project/:id", function (req, res){
        var query = {};
        query._id = req.params.id;
        Project.delete(query, function (err,data){

        });
    });


    // update content (creator)
    router.patch("/api/update-project", function (req, res){
        Project.update(req.body, function (err, data){

        });
    });


    // get all content if id isnt specified , if it is find that specific project
    router.get("/api/project:project_id?", function (req, res){
        var query = {};
        if ( req.params.project_id) {
            query._id = req.params.project_id;
        }
        
        Project.get(query, function(err, data){
            res.json(data);
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

