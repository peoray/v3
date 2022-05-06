import React from 'react';
import { Link, graphql } from 'gatsby';
import DefaultLayout from '../layout/Index';
import Newsletter from '../components/Newsletter';
import SocialShare from '../components/SocialShare';
import Bio from '../components/Bio';
import { editOnGithub } from '../utils/helpers';
import kebabCase from 'lodash.kebabcase';
import '../assets/styles/github-markdown.css';
import { Helmet } from 'react-helmet';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import Suggested from '../components/Suggested';

function post({ data, pageContext }) {
  const { previous, next, slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const lastmod = postNode.parent.mtime;

  const githubLink = editOnGithub(post);

  const disqusConfig = {
    shortname: 'peoray',
    config: { identifier: post.slug, title: post.title },
  };
  return (
    <DefaultLayout>
      <Helmet>
        <title>{`${post.title} – ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={post.path} postNode={postNode} postSEO />
      <div className='mx-auto my-16 container-inner'>
        <h1 className='text-4xl font-bold leading-tight'>{post.title}</h1>
        <div className='mt-2 text-gray-600 text-copy-secondary'>
          {!post.lastmod ? (
            <span>{post.date}</span>
          ) : (
            <span>Last Updated on {lastmod}</span>
          )}

          <span className='mx-2'> &middot; </span>
          <span>
            {/* <span className='align-middle' role='img'  aria-label='popcorn'> */}
            <span className='align-middle' role='img' aria-label='clock'>
              {/* 🍿 */}
              🕒
            </span>
            <span className='ml-2'>{postNode.timeToRead} min read</span>
          </span>
        </div>

        <div className='flex flex-wrap mt-4 text-sm'>
          {post.tags.map((tag) => (
            <Link
              to={`tag/${kebabCase(tag)}`}
              key={tag}
              className='inline-block px-4 py-2 mb-4 mr-4 bg-gray-300 rounded-full lg:mb-0 hover:bg-green-300'
            >
              {tag}
            </Link>
          ))}
        </div>

        <div
          className='mt-12 markdown-body'
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />

        {/* <hr /> */}

        <div className='text-3xl tracking-widest text-center md:text-5xl'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>

        <div className='mt-5 mb-8'>
          <p>
            If you find any error or typo in this article, please feel free to{' '}
            <a
              href={githubLink}
              className='font-bold'
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              edit on Github
            </a>
            .
          </p>

          <div className='mt-6'>
            <p>
              If this was helpful, interesting, or caused some other positive
              emotion, please share!
            </p>
            <SocialShare postPath={post.path} postNode={postNode} />
          </div>
        </div>

        <Suggested previous={previous} next={next} />
      </div>

      <div className='py-4 mx-auto container-inner'>
        <hr className='' />
      </div>
      <Bio />
      <Newsletter />
    </DefaultLayout>
  );
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM DD, Y")
        slug
        description
        lastmod
        path
        tags
        title
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      parent {
        ... on File {
          mtime(formatString: "MMM DD, Y")
        }
      }
      
      html
      timeToRead
    }
  }
  `;
  // category

export default post;
