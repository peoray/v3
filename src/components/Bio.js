import React from 'react';
import avatar from '../assets/images/author.jpg';
import SocialLinks from './SocialLinks';

function Bio() {
  return (
    <div className='overflow-x-hidden border-gray-200 border-b'>
      <div className='get-to-know-me container-inner mx-auto text-xl pb-16 relative'>
        <h2 className='font-bold mb-2 text-2xl text-center' id='about'>
          About the Author
        </h2>

        <div
          className='absolute left-0'
          style={{ top: 50 + 'px', transform: 'translateX(-100%)' }}
        >
          <svg width='170px' height='170px'>
            <use xlinkHref='#dots-triangle' />
          </svg>
        </div>

        <div className='flex flex-col sm:flex-row items-center mb-12'>
          <div className='mb-6 lg:mb-0'>
            <img
              src={avatar}
              alt='avatar'
              className='w-32 h-32 rounded-full object-cover'
            />
          </div>
          <div className='flex-1 ml-6'>
            <p>
              Hi 👋, I'm Emmanuel. I write about the JavaScript ecosystem,
              software development and everything in-between. Everything on this
              site is ad-free and up to date.
            </p>

            <div className='mt-2'>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
