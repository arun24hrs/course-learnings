import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div id='header'>
        <h1 id='welcome'>Welcome to Online Library</h1>
            <ul id='search'>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/books/fiction"}><li>Browse Books</li></Link>
                <Link to={"/add-book"}><li>Add Book</li></Link>
            </ul>
        
    </div>
    <div className="category">
    <p>Pick the book you like by category:</p>
            <div><Link className="categoryLink" to={"/books/biography"}>Biography</Link></div>
            <div><Link className="categoryLink" to={"/books/sci-fi"}>Sci-fi</Link></div>
            <div><Link className="categoryLink" to={"/books/fiction"}>Fictional</Link></div>
            <div><Link className="categoryLink" to={"/books/non-fiction"}>Non-fictional</Link></div>
        </div></>
  )
}

export default Header;

/* A landing page with a welcome message and a list of book categories (e.g.,
    Fiction, Non-Fiction, Sci-Fi, etc.). ( 5 marks)
 */