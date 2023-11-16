import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList.js';

function App() {
  return (
    <Fragment>
      <Navbar brand='LIbrary App' />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: 'center' }}>Book List</h2>
            <BookList />
          </div>
          <div className='col-5'>
            <h2 style={{ textAlign: 'center' }}>Book Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
