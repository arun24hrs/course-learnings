import React from 'react';
import booksList from '../utils/booksData';
import Book from './Book';
import { Link } from 'react-router-dom';

const Home = () => {

    // const [allBooks, setAllBooks] = React.useState([booksList]);
    return (
        <div id="home">
                <h2 className='pageHeading'>Popular Books</h2>
            <div className='famBooksList'>
                {booksList && booksList.map((el)=>{
                    return (
                        <Book key={el.id} book={el}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Home;