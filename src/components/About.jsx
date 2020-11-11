import React from 'react';
import author from '../assets/images/author.jpg';
import mind_map from '../assets/images/mind_map.svg';
import code_review from '../assets/images/code_review.svg';
import SocialLinks from './SocialLinks';

function About() {
  return (
    <div>
      <div className='hero container-inner mx-auto flex flex-col sm:flex-row justify-between items-center pt-16 pb-8'>
        <div className='font-bold lg:focus:w-full sm:w-3/5 text-center sm:text-left'>
          <div className='text-5xl leading-tight'>Emmanuel Raymond</div>
          <div className='text-xl text-green-700 leading-tight'>
            Software Engineer and Open Source Enthusiast
          </div>
          <div className='mt-2 flex justify-center md:justify-start'>
            <SocialLinks />
          </div>
        </div>
        {/* <div className='sm:mt-32 md:mt-8'> */}
        <div className='mt-8 md:mt-0'>
          <img
            src={author}
            alt='author'
            className='mx-auto sm:mx-0 object-cover h-48 w-48 rounded-full'
          />
        </div>
      </div>
      {/* <!-- end hero --> */}

      <div className='container-inner mx-auto'>
        <div className='text-xl md:text-lg'>
          <p className=''>
            Hi 👋, I'm Emmanuel and welcome to my Digital Garden. I'm passionate
            about Open Source and Learning in Public.
          </p>

          <p className='mt-2'>
            {' '}
            I’ve been doing software development for over 4+ years and enjoy
            working with technologies to build products. Currently, I work with
            Javascript and enjoy writing and teaching it through code and words.
            I put great emphasis on code quality, testing and performance
            throughout my projects.
          </p>

          <p className='mt-2'>
            Besides programming and writing for this blog, I enjoy watching
            football (real one) and movies, playing chess when I can, hanging
            out with friends and family, reading books, and doing my best to
            learn the Guitar.
          </p>

          {/* <p className='mt-2'>
            Join my adventure in discovering everything about my experiences in software
            development and everything in-between.
          </p> */}
        </div>

        <div className='flex justify-between items-center py-6'>
          <div className='w-full sm:w-1/2 px-8 py-8 sm:py-0'>
            <img src={mind_map} alt='' />
          </div>
          <div className='w-1/2 px-8 hidden sm:flex justify-end'>
            <img src={code_review} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
