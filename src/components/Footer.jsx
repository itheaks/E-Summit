import React from 'react';
import mapImage from './../assets/map.png';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <img src={mapImage} alt='Map Image' className='w-40% h-auto' />
    </div>
  );
};

export default Footer;
