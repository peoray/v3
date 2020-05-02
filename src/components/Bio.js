import React from 'react';
import avatar from '../assets/images/author.jpg';
import { TwitterFollowButton } from 'react-twitter-embed';
import GitHubButton from 'react-github-btn';

function Bio() {
  return (
    <div className='overflow-x-hidden border-gray-200 border-b'>
      <div className='get-to-know-me container-inner mx-auto text-xl pb-16 relative'>
        {/* <h2 class='font-bold mb-6' id='about'>
          Get to know me:
        </h2> */}

        <div
          className='absolute left-0'
          style={{ top: 50 + 'px', transform: 'translateX(-100%)' }}
        >
          <svg width='170px' height='170px'>
            <use xlinkHref='#dots-triangle' />
          </svg>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center mb-16'>
          <div>
            <img
              src={avatar}
              alt='avatar'
              className='w-32 h-32 rounded-full mb-8 lg:mb-0'
            />
          </div>
          <div className='flex-1 text-lg sm:text-xl ml-6'>
            <p>
              Join my adventure in discovering everything about web programming
              and life. Everything on this site is for you, ad-free
            </p>
            <div className='flex flex-wrap items-center mt-4'>
              <div className='mr-4 mb-3 lg:mb-0'>
                <GitHubButton
                  href='https://github.com/peoray'
                  data-size='large'
                  data-show-count='true'
                  aria-label='Follow @peoray on GitHub'
                >
                  Follow
                </GitHubButton>
              </div>
              <div>
                <TwitterFollowButton
                  screenName='peoray_'
                  options={{ size: 'large' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
