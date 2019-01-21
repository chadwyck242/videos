import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// parent component, class based
class App extends React.Component {
  // state is the returned videos array and the selected video
  state = { videos: [], selectedVideo: null };

  // Lifecycle method that will submit a default search term when page first renders
  componentDidMount() {
    this.onTermSubmit('kittens');
  }

  // Access the Axios instance asynchronously with YouTube get request
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    // set component state with returned YouTube data
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };

  // set state based on selected video from the displayed video list
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* Pass the onTermSubmit callback as a prop to SearchBar */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* pass selected video state as a prop to VideoDetail */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* the callback function onVideoSelect and state videos is passed to VideoList */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
