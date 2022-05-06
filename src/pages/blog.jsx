import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import DefaultLayout from '../layout/Index';
import SEO from '../components/SEO';
import Post from '../components/Post';
import config from '../../data/SiteConfig';

function Blog({ data }) {
  const allPosts = data.allMarkdownRemark.edges;

  const emptyQuery = '';

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;

    const posts = data.allMarkdownRemark.edges || [];

    const filteredData = posts.filter((post) => {
      const { description, title, tags } = post.node.frontmatter;
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join('').toLowerCase().includes(query.toLowerCase()))
      );
    });

    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <DefaultLayout>
      <Helmet
        title={`Blog - ${config.siteTitle} | Full Stack Software Developer`}
      />
      <SEO
        customDescription='Posts, tutorials, explanations, snippets, thoughts, musings, and
          everything else.'
      />
      <div className='py-10 mx-auto container-inner'>
        <h1 className='mb-2 text-5xl font-bold'>Articles</h1>
        <p className='mb-6 text-xl'>
          Up to date Posts, tutorials, explanations, snippets, thoughts,
          musings, and everything else.
        </p>

        <div className='flex justify-center mb-8'>
          <div className='relative w-full'>
            <input
              type='text'
              aria-label='Search'
              value={state.query}
              placeholder='Type to filter posts...'
              onChange={handleInputChange}
              className='w-full px-4 py-2 pl-10 border border-gray-500 rounded-full outline-none bg-background-form focus:border-green-500'
            />
            <div className='absolute top-0 ml-3' style={{ top: `${10}px` }}>
              <svg
                fill='currentColor'
                className='w-5 h-5 text-gray-500'
                viewBox='0 0 24 24'
                width='24'
                height='24'
              >
                <path
                  className='heroicon-ui'
                  d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
                />
              </svg>
            </div>
            {query.length > 0 ? (
              <div
                onClick={() => setState({ query: '' })}
                className='absolute top-0 right-0 mr-3 text-2xl text-gray-400 cursor-pointer hover:text-gray-700'
                style={{ top: `${2}px` }}
              >
                &times;
              </div>
            ) : null}
          </div>
          <div className='self-center ml-2 text-sm'>
            <p className='px-4 py-2 mr-4 font-medium text-white bg-gray-600 rounded-full hover:bg-green-600'>
              {posts.length}
            </p>
          </div>
        </div>

        {posts.map((post) => (
          <Post post={post} key={post.node.id} />
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Blog;

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, Y")
            description
            path
            published
          }
          timeToRead
          id
          fields {
            slug
          }
          parent {
            ... on File {
              mtime(formatString: "MMM DD, Y")
            }
          }
        }
      }
    }
  }
  `;
  // category
