'use strict';

var express = require("express");
var router = express.Router();
var Question = require("./models").Question;

router.param("id", function(req, res, next, id){
    Question.findById(id, function(err, doc){
        if(err) return next(err);
        if(!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        res.question = doc;
        return next();
    });
});

router.param("aID", function(req, res, next, id){
    req.answer = req.question.answers.id(id);
    if(!req.answer){
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
    }
});    

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
        res.json(req.question);
    //})
    //res.json({
    //    response: "You sent a GET req for ID "+ req.params.id
});


//POST /questions/:qid/answers
router.post("/:id/answers", function(req, res, next){
    req.question.answers.push(req.body);
    req.question.save(function(err,question){
        if (err) return next(err);
        res.status(201);
        res.json(question);
    });
});

//PUT /questions/:qid/answers/:aid
//edit a specific answer
router.put('/:id/answers/:aID', function(req, res){
    req.answer.update(req.body, function(err, result){
        if(err) return next(err);
        res.json(result);
    });
});

//DELETE /questions/:qid/answers/:aid
//delete a specific answer
router.delete('/:id/answers/:aID', function(req, res){
    req.answer.remove(function(){
        req.question.save(function(err, question){
            if (err) return next(err);
            res.json(question);
        });
    });
});


//POST /questions/:qid/answers/:aid/vote-up
//POST /questions/:qid/answers/:aid/vote-down
//vote on a specific answer
router.post('/:id/answers/:aID/vote-:dir', 
    function(req, res, next) {
        if(req.params.dir.search(/^up|down$/) === -1){
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
    }   else {
            req.vote = req.params.dir;
            next();
    }
}, function(req, res, next){
        req.answer.vote(req.vote, function(err, question){
            if(err) return next(err);
            res.json(question);
    });
});



module.exports = router;

