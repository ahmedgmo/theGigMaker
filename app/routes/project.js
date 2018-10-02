
const express = require('express')
const router = express.Router()
const db = require("../models/projects/index")




// Project Crud actions


// Create project



module.exports = function(router) {

    // Home route
    router.get("/", function(req,res){
        res.render("home");
    });


    // saved projects route
    router.get("/savedProjects", function(req, res){
        res.render("saved");
    });


    // create new project (creator)
    router.post("/create-project", function (req, res){
        var query = req.body;
           Project.create(query, function (err, data){

           });
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
    
}

