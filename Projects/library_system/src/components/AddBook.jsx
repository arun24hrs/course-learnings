import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/redux/bookSlice";

function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", category: "", description: "", rating: "",  url: ""});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate(`/books/${form.category.toLowerCase()}`);
  };

  return (
      <>
      <h2 className='pageHeading'>Add a New Book</h2>
    <form onSubmit={handleSubmit} className="add-book">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      ></textarea>
      <br />
      <br />
      <input
        type="number"
        name="rating"
        placeholder="Ratings"
        value={form.rating}
        onChange={handleChange}
        required
      />
      <br /><br />
      <input
        type="text"
        name="url"
        placeholder="Image URL"
        value={form.url}
        onChange={handleChange}
        required
      />
      <p style={{fontSize:"8px", color: "#444"}}>In case of no URL, use: https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg</p>
      <br />

      <button type="submit">Add Book</button>
    </form>
      </>
  );
}

export default AddBook;