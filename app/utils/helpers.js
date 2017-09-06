// require axios
var axios = require("axios");

var helper= {
  runQuery: function(topic, startYear, endYear){
    //NYT API key
    var APIkey= "0f42d9432843478c87c46da4dfbebcc0";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
    return axios.get(queryURL).then(function(response){
      var results = [];
      console.log("This is the api response" , response.data.response);
      // if there is a result, return it formatted properly
      if (response.data.response) {
        for(var i=0; i<5; i++) {
          results.push(response.data.response[i]);
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
  postSaved: function(article){
    return axios.post('/api/saved', {title: title, date: date, url: url});
  },
  deleteSaved: function(id){
    return axios.delete('api/saved/' + id);
  }
};

module.exports = helper;