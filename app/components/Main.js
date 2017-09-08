// Require React
var React = require("react");

// bringing in subcomponents
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// Requiring our helper for API calls
var helpers = require("../utils/helpers");

// creating Main Component
var Main = React.createClass({
  // set initial state
  getInitialState: function(){
    return{
      search: ["","",""],
      results: {},
      saved: ""
    };
  },

  // loads when page is ready
  componentDidMount: function(){
    // using helper to get saved articles
    helpers.getSaved().then(function(response){
      console.log("This is the response in Main coming from axios get saved" , response.data);
        this.setState({ saved: { docs: response.data} });
    }.bind(this));
  },
  // updating as changes occur
  componentDidUpdate: function(){
    // run query
    helpers.runQuery(this.state.search[0], this.state.search[1], this.state.search[2]).then(function(data){
        console.log("Results", data.docs);
        this.setState({ results: {docs: data.docs}});
        console.log("results are saved to Main");
        // then post results to history
    }.bind(this));
  },
  // lets children update parent
  setSearch: function(topic, startYear, endYear){
    console.log("This is setSearch in Main" , topic, startYear, endYear)
    this.setState({ search: [topic, startYear, endYear] });
  },
  // render the function
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="card-panel z-depth-4 panelTitle center-align">
            <h2>New York Times</h2>
            <h4>Search for an article!</h4>
          </div>
        </div>

        <div className="row col s12">
          <Search search={this.setSearch} />
        </div>

        <div className="row col s12">
          <Results results={this.state.results} />
        </div>

        <div className="row col s12">
          <Saved saved={this.state.saved} />
        </div>

      </div>
    );
  }
});

module.exports = Main;