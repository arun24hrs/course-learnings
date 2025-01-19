// import React from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => {
    console.log(state.items);
    return state.items.filter((book) => book.id === parseInt(id))
});


  return (
    <div className="book-details">
      <img src={book[0].url} width={200} height="auto"/>
      <div className="bookDescription">
      <h2>{book[0].title}</h2>
      <p className="author">Author: {book[0].author}</p>
      <p>{book[0].description}</p>
      <p>Rating: {book[0].rating}</p>
      </div>
      <button onClick={() => navigate("/books/fiction")}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;