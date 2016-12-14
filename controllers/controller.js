// dependencies
var express = require('express');
var router = express.Router();
var path = require('path');

// Require Article Schema
var Article = require("../models/Article.js");

// Index page
router.get('/', function(req, res) {

  res.send('Hello World');
});

module.exports = router;