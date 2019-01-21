import React from "react";
import VideoItem from "./VideoItem";
// This is a functional component
// prop destructuring is being is being used here
const VideoList = ({ videos, onVideoSelect }) => {
  // map over the passed in videos and create a VideoItem instance for each
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  // the list of videos to be displayed is returned here
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
