import React from 'react';

export const BookList = ({ books }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: 'DELETE'
    };

    fetch('http://localhost:7000/api/books/del/' + id, requestInit)
      .then((res) => res.json)
      .then((res) => console.log(res));
  };

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
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.edition}</td>
            <td>
              <div className='mb-3'>
                <button
                  onClick={() => handleDelete(book.id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//export default BookList;
