import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import VideoPlayer from './components/VideoPlayer';
import ChannelPage from './Pages/ChannelPage';
import SignIn from './components/SignIn';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;