'use strict';

var express = require("express");
var router = express.Router();
var Question = require("./models").Question;


//GET /questions
router.get("/", function(req, res, next){
    //return all questions
    Question.find({})
                .sort({createdAt: -1}) 
                .exec(function(err, questions){
                    if(err) return next(err);
                    res.json(questions);
                });
    //res.json({response: "You sent a GET req"});
});

//POST /questions
router.post("/", function(req, res, next){
    var question = new Question(req.body);
    question.save(function(err, question){
        if(err) return next(err);
        res.status(201);
        res.json(question);
    });
    //return all questions
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
router.put('/:id/answers/:aID', function(req, res){
    res.json({
        response: 'You sent a PUT req to /answer ' + req.params.aID,
        questionID: req.params.id,
        answerID: req.params.aID,
        body: req.body
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


//DELETE /questions/:qid/answers/:aid
//delete a specific answer
router.delete('/:id/answers/:aID', function(req, res){
    res.json({
        response: 'You sent a DELETE req to /answer ' + req.params.aID,
        questionID: req.params.id,
        answerID: req.params.aID,
    });
});


//POST /questions/:qid/answers/:aid/vote-up
//POST /questions/:qid/answers/:aid/vote-down
//vote on a specific answer
router.post('/:id/answers/:aID/vote-:dir', function(req, res, next) {
    if(req.params.dir.search(/^up|down$/) === -1){
        var err = new Error('Parameter Not Found');
        err.status = 404;
        next(err);
    } else {
        next();
    }
}, function(req, res){
res.json({
    response: 'You sent a POST request to /vote-' + req.params.dir,
    userID: req.params.id,
    accountID: req.params.aID,
    vote: req.params.dir
});
});



module.exports = router;

