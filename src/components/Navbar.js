import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <header className='border-t-14 border-green-700'>
      <nav className='container mx-auto flex flex-wrap justify-between items-center py-8'>
        <div>
          <Link to='/' className='inline-block bg-white py-2 px-4'>
            <div className='transform translate-y-3 translate-x-2 font-bold italic leading-10 text-xl'>
              ER
            </div>
          </Link>
        </div>
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg className="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div> */}
        <ul
          className='uppercase tracking-wide font-bold space-x-8 space-y-6 space-y-0 mt-0'

          // <ul
          //   className="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          //   :className="isOpen ? 'block': 'hidden'"
        >
          <li>
            <Link to='/blog' className='text-copy-primary hover:text-gray-600'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
