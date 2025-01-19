import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import bookStore from './utils/redux/store';
import {Provider} from "react-redux";
import { Route, Routes } from 'react-router-dom';
import BrowseBooks from './components/BrowseBooks';
import NotFound from './components/NotFound';
import Book from './components/Book';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={bookStore}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        {/* <Route path="/books" element={<BrowseBooks />} /> */}
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  )
}

export default App
