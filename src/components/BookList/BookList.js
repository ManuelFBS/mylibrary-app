import React from 'react';

export const BookList = ({ books }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <th>{book.id}</th>
            <th>{book.title}</th>
            <th>{book.author}</th>
            <th>{book.edition}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//export default BookList;
