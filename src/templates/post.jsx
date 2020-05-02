import React from 'react';
import { Link, graphql } from 'gatsby';
import DefaultLayout from '../layout/Index';
import Newsletter from '../components/Newsletter';
import SocialShare from '../components/SocialShare';
import Bio from '../components/Bio';
import { DiscussionEmbed } from 'disqus-react';
import { editOnGithub } from '../utils/helpers';
import kebabCase from 'lodash.kebabcase';
import '../assets/styles/github-markdown.css';
import { Helmet } from 'react-helmet';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

function post(props) {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  // let thumbnail

  // if (post.thumbnail) {
  //   thumbnail = post.thumbnail.childImageSharp.fixed
  // }

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
      <div className='container-inner mx-auto my-16'>
        <h1 className='text-4xl font-bold leading-tight'>{post.title}</h1>
        <div className='text-copy-secondary mb-4'>
          <span>{post.date}</span>
          <span> &middot; </span>
          <span>
            <span role='img' aria-label='popcorn'>
              🍿
            </span>
            {postNode.timeToRead} min read
          </span>
          <span> &middot; </span>
          <span>
            posted in{' '}
            <Link to={`category/${post.category.toString().toLowerCase()}`}>
              {post.category}
            </Link>
          </span>
        </div>
        {/* <div className='text-xl text-gray-600 mb-4'>{post.date}</div> */}

        <div className='flex flex-wrap text-sm'>
          {post.tags.map((tag) => (
            <Link
              to={`tag/${kebabCase(tag)}`}
              key={tag}
              className='bg-gray-300 rounded-full mb-4 lg:mb-0 px-4 py-2 mr-4 hover:bg-green-300 inline-block'
            >
              {tag}
            </Link>
          ))}
        </div>
          <SocialShare postPath={post.path} postNode={postNode} />
        <div
          className='markdown-body mb-8'
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
        {/* <hr /> */}
        <div className='mb-8 mt-5'>
          {/* <p>
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
          </p> */}
          {/* <p></p> */}
          <SocialShare postPath={post.path} postNode={postNode} />
        </div>
        <hr className='mb-4' />
        <DiscussionEmbed {...disqusConfig} />
      </div>
      <div className='container-inner mx-auto py-4'>
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
        date(formatString: "MMMM D, Y")
        slug
        description
        path
        tags
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        category
      }
      html
      timeToRead
    }
  }
`;

export default post;
