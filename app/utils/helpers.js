// require axios
var axios = require("axios");

var helper= {
  runQuery: function(topic, startYear, endYear){
    //NYT API key
    var APIkey= "0f42d9432843478c87c46da4dfbebcc0";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
    return axios.get(queryURL)
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },
  getSaved: function(){
    return axios.get('/api/saved');
  },
  postSaved: function(article){
    return axios.post('/api/saved', {title: title, date: date, url: url});
  },
  deleteSaved: function(id){
    return axios.delete('api/saved/' + id);
  }
};

module.exports = helper;