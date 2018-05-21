'use strict';

var express = require("express");
var router = express.Router();


//GET /questions
router.get("/", function(req, res){
    //return all questions
    res.json({response: "You sent a GET req"});
});

//POST /questions
router.post("/", function(req, res){
    //return all questions
    res.json({
        response: "You sent a POST req",
        body: req.body
    });
});

//GET /questions/:qid
router.get("/:id", function(req, res){
    res.json({
        response: "You sent a GET req for ID "+ req.params.id
    });
});


//POST /questions/:qid/answers
router.post("/:id/answers", function(req, res){
    res.json({
        response: "You sent a POST req to /answers",
        questionId: req.params.id,
        body: req.body
    });
});

//PUT /questions/:qid/answers/:aid
//edit a specific answer
router.put(":qid/answers:aid", function(req, res){
    res.json({
        response: "You sent a PUT req to /answers",
        questionId: req.params.qid,
        answerId: req.params.aid,
        body: req.body
    });
});



//POST /questions/:qid/answers
router.post("/:qid/answers", function(req, res){
    res.json({
        response: "You sent a POST req to /answers",
        questionId: req.params.qid,
        body: req.body
    });
});


//DELETE /questions/:qid/answers/:aid
//delete a specific answer
router.delete(":qid/answers:aid", function(req, res){
    res.json({
        response: "You sent a DELETE req to /answers",
        questionId: req.params.qid,
        answerId: req.params.aid,
    });
});


//POST /questions/:qid/answers/:aid/vote-up
//POST /questions/:qid/answers/:aid/vote-down
//vote on a specific answer
router.post(":qid/answers:aid/vote-:dir", function(req, res){
    res.json({
        response: "You sent a POST req to /vote-"+ req.params.dir,
        questionId: req.params.qid,
        answerId: req.params.aid,
        vote: req.params.dir
    });
});


module.exports = router;

