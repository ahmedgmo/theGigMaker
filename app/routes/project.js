
const express = require('express')
const router = express.Router()
const db = require("../models/projects/index")




// Project Crud actions


// Create project

router.post("/create-project", function (req, res){


    db.Project.create(req.body)
        .then(function(dbProject){


        return db.User.findOneAndUpdate({},   )
        })




})