// Include React dependency
var React = require("react");

// Creating the Search component
var Search = React.createClass({
  // initial state
  getInitialState: function(){
    return{
      topic: "",
      startYear: "",
      endYear: ""
    };
  },
  // responds to user input
  handleTopicChange: function(event){
    console.log("change in topic text")
    this.setState({ topic: event.target.value });
  },
  handleStartChange: function(event){
    console.log("change in start year text")
    this.setState({ startYear: event.target.value });
  },
  handleEndChange: function(event){
    console.log("change in end year text")
    this.setState({ endYear: event.target.value });
  },
  // on submit function
  handleSubmit: function(event){
    event.preventDefault();
    console.log("Form is being submit");
    //sends the parent the search parameters
    this.props.search(this.state.topic, this.state.startYear, this.state.endYear);
  },
  // render the function
  render: function(){
    return (
      <div className="card z-depth-4 center-align">
        <h3 className="panelTitle">Search</h3>
        <form className="card-panel" onSubmit={this.handleSubmit} >
          <div className="input-field">
            <input type="text" value={this.state.search} placeholder="Topic (required)" id="topic" onChange={this.handleTopicChange} className="validate" required></input>
          </div>
          <div className="input-field">
            <input type="number" value={this.state.startYear} maxLength="4" placeholder="Start Year (required)" id="startYear" onChange={this.handleStartChange} className="validate" required></input>
          </div>
          <div className="input-field">
            <input type="number" value={this.state.endYear} maxLength="4" placeholder="End Year (required)" id="endYear" onChange={this.handleEndChange} className="validate" required></input>
          </div>
          <br></br>
          <button className="waves-effect waves-light btn" type="submit">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = Search;