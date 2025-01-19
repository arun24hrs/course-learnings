/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Book = ({ book }) => {

  const route = `/book/${book.id}`

  return (
    <Link to={route} className="linkTag">.

    <div className="book-details">
      <img src={book.url} width={200} height="auto"/>
      <div className="bookDescription">
      <h2>{book.title}</h2>
      <p className="author">Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      </div>
    </div>
    </Link>
  );
};

export default Book;
