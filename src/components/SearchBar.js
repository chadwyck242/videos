import React from "react";
// this will be a class based component
class SearchBar extends React.Component {
  // state will be a search term
  state = { term: "" };

  // update the state as user is typing in the search input
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // Call the provided callback prop anytime
    // a user submits the search form
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="ui medium top left attached label teal">
              Video Search
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
