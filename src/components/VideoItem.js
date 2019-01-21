import "./VideoItem.css";
import React from "react";
// this is a functional component
// more prop destructuring is being used here
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // clicking a single video list item will trigger the onVideoSelect callback 
    // sending the selected video back to App
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
