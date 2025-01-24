/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import '../App.css'; // Import CSS for ChannelPage

const ChannelPage = ({ match }) => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        // Fetch channel details (simulated)
        const channelId = match.params.id; // Assuming channel ID is passed in the URL
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=YOUR_YOUTUBE_API_KEY`);
        setChannel(response.data.items[0]);

        // Fetch videos for the channel
        const videosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=YOUR_YOUTUBE_API_KEY&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`);
        setVideos(videosResponse.data.items);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChannelData();
  }, [match.params.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="channel-page">
      {channel && (
        <div className="channel-info">
          <h1>{channel.snippet.title}</h1>
          <img src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} />
          <p>{channel.snippet.description}</p>
        </div>
      )}
      <h2>Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ChannelPage;