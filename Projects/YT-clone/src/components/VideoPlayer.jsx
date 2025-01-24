/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useParams } from 'react-router-dom';



const VideoPlayer = ({ match }) => {
  const [video, setVideo] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.id}&part=snippet,contentDetails&key=AKAFeFRS4G68oWQ--zco`);
      setVideo(response.data.items[0]);
    };
    fetchVideo();
  }, [params.id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.snippet.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;
