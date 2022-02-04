import React from 'react';

export const GifGridItem = ( {title, url }) => {


  return (
    <div className='overflow-hidden rounded-md border-black border-2 xs:w-1/2 md:w-2/12 animate__animated animate__fadeIn mx-px my-5'>
      <img 
        className='w-full md:h-5/6 sm:h-5/6 xs:h-5/6'
        src={ url }
        alt={ title }
      />
      <p className='my-1 text-center'>{ title }</p>
    </div>
  );
};
