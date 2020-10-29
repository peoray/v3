import React from 'react';
import { Link } from 'gatsby';

function Post({ post }) {
  return (
    <div key={post.node.id} className='post mb-6'>
      <span className='opacity-75'>
        <span>{post.node.frontmatter.date}</span>
        {/* <span>Published {post.node.frontmatter.date}</span> */}
        {/* <span> &middot; </span>
        <span>Last Updated {post.node.parent.mtime}</span> */}

        {/* <span> &middot; </span>
        <span role='img' aria-label='popcorn'>
          🍿
        </span>
        {post.node.timeToRead} min read
        */}
      </span>

      <h2 className='text-2xl font-bold'>
        <Link
          to={`blog/${post.node.fields.slug}`}
          className='text-copy-primary'
        >
          {post.node.frontmatter.title}
        </Link>
      </h2>
    </div>
  );
}

export default Post;
