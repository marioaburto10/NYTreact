// require axios
var axios = require("axios");

//NYT API key
var nytAPI= "0f42d9432843478c87c46da4dfbebcc0";

var helper= {
  runQuery: function(topic, startYear, endYear){
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&begin_date=" + endYear + "0231";
    return axios.get(queryURL).then(function(response){
      var results = [];
      // if there is a result, return it formatted properly
      if (response.data.results[0]) {
        for(var i=0, i<5, i++) {
          results.push(response.data.results[i].formatted);
        }
        return results;
      } else {
        // if no results
        return "Nothing was found";
      }
    });
  },
  getSaved: function(){
    return axios.get('/api/saved');
  },
  postSaved: function(){
    return axios.post('/api/saved', article);
  },
  deleteSaved: function(){
    return axios.delete('api/saved');
  }
};

module.exports = helper;