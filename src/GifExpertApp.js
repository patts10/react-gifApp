import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Footer } from './components/Footer';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Squartle']);

  return (
    <>
    <div className='container mx-auto pb-16'>
      <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate my-8'>Gif's Application</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      {
        categories.map( category => (
          <GifGrid 
            key={ category } 
            category={ category }
          />
        ))
      }
    </div>
    <Footer />
    </>
  );
};
