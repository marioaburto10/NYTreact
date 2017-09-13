// Include React
var React = require("react");

// bring in helpers
var helpers = require("../../utils/helpers");

// Creating the Saved component
var Saved = React.createClass({
  // delete saved article
  handleDelete: function(articleID){
    console.log("button clicked");
    console.log(articleID);

    helpers.deleteSaved(articleID).then(function(response){
      console.log("Deleted article");
    }.bind(this));

    helpers.getSaved().then(function(response){
      console.log("This is the response in Saved coming from axios get saved" , response.data);
          this.props.updateSavedFromSaved(response.data);
          console.log("saved data has been passed back to Main from Saved")
    }.bind(this));
  },

   // A helper method for mapping through our articles and outputting some HTML
  renderArticles: function() {
    return this.props.saved.docs.map(function(article, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="collection-item">
            <h5>
              <span>
                <em>{article.title}</em>
              </span>
              <br />
              <span className="btn-group pull-right">
                <a href={article.url} rel="noopener noreferrer" target="_blank">
                  <button className="waves-effect waves-light btn right-align ">View Article</button>
                </a>

                {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                */}
                <button className="waves-effect waves-light btn right-align" onClick={() => this.handleDelete(article._id)} value={article._id}>Remove</button>
              </span>
            </h5>
            <p>Date Published: {article.date.substring(0,10)}</p>

          </li>

        </div>
      );

    }.bind(this));

  },

  renderContainer: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card-panel z-depth-4 panelTitle center-align">
                <h4 className="panelTitle">
                    Saved
                </h4>
    
                <ul className="collection">
                  {this.renderArticles()}
                </ul>
        
            </div>
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    // If we have no articles, render this HTML
    if (!this.props.saved) {
      return (
        <ul>
          <li className="collection-item">
            <h4>
              <span>
                <em>To see your saved articles, please save your first article from results...</em>
              </span>
            </h4>
          </li>
        </ul>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderContainer();
  }


});

module.exports = Saved;