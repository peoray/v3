import React from 'react';
import author from '../assets/images/author.jpg';
import mind_map from '../assets/images/mind_map.svg';
import code_review from '../assets/images/code_review.svg';
import SocialLinks from './SocialLinks';

function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between pt-16 pb-8 mx-auto hero container-inner sm:flex-row">
        <div className="font-bold text-center lg:focus:w-full sm:w-3/5 sm:text-left">
          <div className="text-5xl leading-tight">Emmanuel Raymond</div>
          <div className="text-lg leading-tight text-green-700">
            Software Engineer, Technical Writer and Open Source Enthusiast
          </div>
          <div className="flex justify-center mt-2 md:justify-start">
            <SocialLinks />
          </div>
        </div>
        {/* <div className='sm:mt-32 md:mt-8'> */}
        {/* <div className='mt-8 md:mt-0'>
          <img
            src={author}
            alt='author'
            className='object-cover w-48 h-48 mx-auto rounded-full sm:mx-0'
          />
        </div> */}
      </div>
      {/* <!-- end hero --> */}

      <div className="mx-auto container-inner">
        <div className="text-xl md:text-lg">
          <p className="">
            Hi 👋, I'm Emmanuel and welcome to my Digital Garden. I'm passionate
            about Open Source and Learning in Public.
          </p>

          <p className="mt-8">
            I'm a Product Engineer with over 4+ years of experience with a track
            record in building complex applications on a global scale with tools
            such as Javascript, Nodejs, Vuejs (2 & 3), Nuxt, MySQL, MongoDB and
            other modern technologies.
          </p>

          <p className="mt-4">
            {' '}
            I'm experienced in different industries such as SaaS, B2C, B2B,
            start-ups and scale-up stage companies. Worked with different teams
            large and small, as well as teams in different geographical zones.
            Familiar with agile/scrum development process and have used tools
            such as Jira, Notion, Zoom, Slack, Asana, Basecamp, Google suite,
            etc.
          </p>

          <p className="mt-4">
            I'm an active contributor to open source projects. I'm a core team
            contribitor to{' '}
            <a href="https://vue.chakra-ui.com/">Chakra UI Vue</a>
          </p>

          <p className="mt-4">
            Besides programming and writing for this blog, I enjoy watching
            football and movies, playing chess when I can, hanging out with
            friends and family, reading books, and doing my best to learn the
            Guitar.
          </p>

          {/* <p className='mt-2'>
            Join my adventure in discovering everything about my experiences in software
            development and everything in-between.
          </p> */}
        </div>

        <div className="flex items-center justify-between py-6">
          <div className="w-full px-8 py-8 sm:w-1/2 sm:py-0">
            <img src={mind_map} alt="" />
          </div>
          <div className="justify-end hidden w-1/2 px-8 sm:flex">
            <img src={code_review} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
