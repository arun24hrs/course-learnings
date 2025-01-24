import  { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import '../App.css'; // Import CSS for HomePage

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=programming&type=video&key=AIzaSw168oWQ--zco`);
        console.log(response)
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="homepage">
      <h1>Video List</h1>
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
