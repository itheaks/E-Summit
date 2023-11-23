import React from 'react';
import Typed from 'react-typed';
import esumImage from './../assets/esum.jpg';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <img src={esumImage} alt='Esum Image' className='w-full h-auto' />

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Enjoy The Summit.
        </h1>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Register Yourself</button>
      </div>
    </div>
  );
};

export default Hero;
