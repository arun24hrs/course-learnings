import { Link } from 'react-router-dom';
import '../App.css'; // Import CSS for Header

const Header = () => {
  return (
    <header className="header">
      <h1>YouTube Clone</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  );
};

export default Header;