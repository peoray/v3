import React from 'react';
import projects from '../../data/projects';

function ProjectListing(props) {
  // console.log
  let styles = {
    top: '50px',
    transform: 'translate(100%) rotate(180deg)',
  };
  return (
    <>
      <div>
        <div className='overflow-x-hidden'>
          <div className='projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative'>
            <h2 className='font-bold mb-6' id='projects'>
              Here are some projects I've worked on:
            </h2>

            <div className='absolute right-0' style={styles}>
              <svg width='170px' height='170px'>
                <use xlinkHref='#dots-triangle' />
              </svg>
            </div>

            <ul className='text-lg sm:text-xl space-y-6'>
              {projects.map((project) => (
                <li className='checkmark mb-6' key={project.title}>
                  <div>{project.title}</div>
                  <div className='text-lg text-gray-600'>
                    {project.description}
                  </div>
                  <div className='mt-2'>
                    <a
                      target='_blank'
                      rel='nofollow noopener noreferrer'
                      href={project.source}
                    >
                      Github
                    </a>
                    {project.path ? (
                      <>
                        <span className='px-1'>|</span>
                        <a
                          target='_blank'
                          rel='nofollow noopener noreferrer'
                          href={project.path}
                        >
                          View
                        </a>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- end projects --> */}
        </div>
      </div>
    </>
  );
}

export default ProjectListing;
