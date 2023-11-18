import React from 'react';

export const Form = ({ book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  let { title, author, edition } = book;

  const handleSubmit = (e) => {
    edition = parseInt(edition, 10);

    // Validación de los datos...
    if (title === '' || author === '' || edition <= 0) {
      alert('Todos los campos son obligatorios...');
      return;
    }
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
