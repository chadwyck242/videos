import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment inverted">
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
