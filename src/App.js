import React, { Fragment, useEffect, useState } from 'react';
import { Navbar } from './components/NavBar/Navbar.js';
import { BookList } from './components/BookList/BookList.js';
import { Form } from './components/Form/Form.js';

function App() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    edition: 0
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:7000/api/books')
        .then((res) => res.json())
        .then((res) => setBooks(res.data || []));
    };
    getBooks();
  }, []);

  return (
    <Fragment>
      <Navbar brand='LIbrary App' />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: 'center' }}>Book List</h2>
            <BookList books={books} />
          </div>
          <div className='col-5'>
            <h2 style={{ textAlign: 'center' }}>Book Form</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
