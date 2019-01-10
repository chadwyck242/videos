import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="search-bar ui segment inverted">
        <form className="ui form">
          <div className="field">
            <label className="ui medium top left attached label teal">
              Video Search
            </label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
