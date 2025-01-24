/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import CSS for VideoCard

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.channelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;