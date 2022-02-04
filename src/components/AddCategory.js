import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputvalue, setInputvalue] = useState('');

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputvalue.trim().length > 2) {
      setCategories( c => [ inputvalue, ...c ]);
      setInputvalue('');
    }
  }

  return (
  <form onSubmit={ handleSubmit } >
    <input 
      className='my-5'
      type='text'
      value={ inputvalue }
      onChange={ handleInputChange }
      placeholder={'Search...'}
    />
  </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}