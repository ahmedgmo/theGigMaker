
const express = require('express');
const router = express.Router();
const db = require("../models/projects/index")

const Project = require('../controllers/project')







  router.get("/api/savedCollaboration", function(req, res){
    res.render("saved");
});
