
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
const booksData = useSelector((state) => state.items);
console.log(booksData, "book ");

  const [categoryBook, setCategoryBook] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const { category } = useParams();

  const catBooks = booksData.filter((el) => el.category.toLowerCase() == category);


  const searchBook = () => {
    console.log(search)
      const filteredBooks = booksData.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
      setCategoryBook(filteredBooks);
  }

  React.useEffect(() => {
    setCategoryBook(catBooks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <>
      <h2 className="pageHeading">{category.toUpperCase()} Books</h2>
      <div className="searchBox">
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchBook}>Search</button>
      </div>
      <div className="categoryBooksList">
      
        {categoryBook.map((el) => {
          return (
              <div className="book-details" key={el.id}>
                <Link className="linkTag" to={`/book/${el.id}`}>
              <img src={el.url} width={"100%"} height="auto" />
              <div>
              <h2>{el.title}</h2>
              <p className="author">Author: {el.author}</p>
              <p>{el.description}</p>
              <p>Rating: {el.rating}</p>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrowseBooks;
