import React from 'react';

export const Form = ({ book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  let { title, author, edition } = book;

  const handleSubmit = () => {
    edition = parseInt(edition, 10);

    // Validación de los datos...
    if (title === '' || author === '' || edition <= 0) {
      alert('Todos los campos son obligatorios...');
      return;
    }

    // Consulta...
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    };

    fetch('http://localhost:7000/api/books/create', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res));

    // Reiniciando state del libro (book)...
    setBook({
      title: '',
      author: '',
      edition: 0
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          name='title'
          onChange={handleChange}
          type='text'
          id='title'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='author' className='form-label'>
          Author
        </label>
        <input
          name='author'
          onChange={handleChange}
          type='text'
          id='author'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='edition' className='form-label'>
          Edition
        </label>
        <input
          value={edition}
          name='edition'
          onChange={handleChange}
          type='text'
          id='edition'
          className='form-control'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};
