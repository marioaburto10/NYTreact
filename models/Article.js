var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleShema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

var Article = mongoose.model("Article", ArticleShema);
module.exports = Article;