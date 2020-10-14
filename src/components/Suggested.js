import React from 'react';
import { Link } from 'gatsby';

export default function Suggested({ previous, next }) {
  return (
    <nav className='lg:flex justify-between mt-10 md:mt-16'>
      {previous && (
        <Link
          to={previous.frontmatter.path}
          rel='previous'
          className='transition-all duration-300 block cursor-pointer'
        >
          <span className='flex items-baseline text-white opacity-50 text-sm'>
            <span className='text-xl'>&#8592;</span>
            Previous
          </span>
          <h2 className='text-xl'>{previous.frontmatter.title}</h2>
        </Link>
      )}

      {next && (
        <Link
          to={next.frontmatter.path}
          rel='next'
          className='transition-all duration-300 block mt-6 md:mt-0 cursor-pointer'
        >
          <span className='flex items-baseline text-white opacity-50 text-sm'>
            Next
            <span className='text-xl'>&#8594;</span>
          </span>
          <h2 className='text-xl'>{next.frontmatter.title}</h2>
        </Link>
      )}
    </nav>
  );
}
