// Include React
var React = require("react");

// bring in helpers
var helpers = require("../../utils/helpers");

// Creating the Results component
var Results = React.createClass({
  handleSave: function(event){
    helpers.postSaved(article).then(function(response){
      console.log("Saved article");
    }.bind(this));
  },
  // // render the function
  // render0: function(){
  //   return(
  //     <div className="panel card z-depth-4 center-align">
  //       <h3 className="panelTitle">Results</h3>

  //       <div className="resultBox">
  //         {this.props.results.docs.map(function(search, i){
  //           return(
  //             <li key={search._id}>
  //               <strong><a href={search.web_url} className="left-align" target="_blank">{search.title}</a></strong>
  //                     <i> {search.date.substring(0,10)}</i>
  //                   <span>
  //                     <button className="waves-effect waves-light btn right-align" onClick={this.handleSave} value={search._id}>Save</button>
  //                   </span>
  //             </li>
  //           );
  //         })}
  //         <h5 className="left-align">{this.props.results}</h5>
  //         <button className="waves-effect waves-light btn right-align">Save</button>
  //       </div>
  //     </div>
  //   )
  // },

   // A helper method for mapping through our articles and outputting some HTML
  renderArticles: function() {
    return this.props.results.docs.map(function(article, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="collection-item">
            <h5>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <br />
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="waves-effect waves-light btn right-align ">View Article</button>
                </a>

                {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                */}
                <button className="waves-effect waves-light btn" onClick={() => this.handleSave(article)}>Save</button>
              </span>
            </h5>
            <p>Date Published: {article.pub_date.substring(0,10)}</p>

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
                    Results
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
    if (!this.props.results.docs) {
      return (
        <li className="collection-item">
          <h4>
            <span>
              <em>Enter search terms to begin...</em>
            </span>
          </h4>
        </li>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderContainer();
  }



});

module.exports = Results;