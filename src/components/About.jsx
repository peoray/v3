import React from 'react';
import author from '../assets/images/author.jpg';
import mind_map from '../assets/images/mind_map.svg';
import code_review from '../assets/images/code_review.svg';

function About() {
  return (
    <div>
      <div className='hero container-inner mx-auto flex flex-col sm:flex-row justify-between items-center pt-16 pb-8'>
        <div className='text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left'>
          <div className='leading-tight'>Hi 👋, I'm Emmanuel.</div>
          <div className='text-green-700 leading-tight'>
            Welcome to my Website.
          </div>
        </div>
        <div className='sm:mt-32 md:mt-0'>
          <img
            src={author}
            alt='author'
            className='mx-auto sm:mx-0 object-contain h-48 w-48 rounded-full'
          />
        </div>
      </div>
      {/* <!-- end hero --> */}

      <div className='container-inner mx-auto text-lg sm:text-xl'>
        <p className=''>
          I'm a Software Developer and an Autodidact. I'm interested in
          Open Source and Learning in Public. Currently, I worked at <a href="https://chigisoft.com">Chigisoft</a> as a Full Stack developer working on different exciting projects.
        </p>

        <p className='mt-2'>
          Join my adventure in discovering everything about web programming and
          life. 
        </p>

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
