// dependencies
var express = require('express');
var router = express.Router();
var path = require('path');

// Require Article Schema
var Article = require("../models/Article.js");

// Index page
router.get('/', function(req, res) {

  res.sendFile(__dirname + "/public/index.html");
});

router.get('/api/saved', function(req, res){
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc){
    if (err) {console.log(err);} 
    else{res.send(doc):}
  });
});

router.post('/api/saved', function(req, res){
  Article.create({
    title: req.body.title,
    date: Date.now(),
    url: req.body.url
  }, function(err){
    if(err){console.log(err);}
    else{res.send("Article is saved");}
  });
});

router.delete('/api/saved', function(req, res){
  Article.findByIdAndRemove({ _id: req.params.id }, function(err, doc){
    if(err){console.log(err);}
    else{res.redirect();}
  })
})

module.exports = router;