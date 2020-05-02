import React from "react"
import DefaultLayout from "../layout/Index"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"

function tag(props) {
  const { tag } = props.pageContext
  const posts = props.data.allMarkdownRemark.edges

  return (
    <DefaultLayout>
      <Helmet title={`Posts tagged as "${tag}" – ${config.siteTitle}`} />{" "}
      <div class="container-inner mx-auto my-16">
        <h2 class="text-4xl font-bold mb-8 border-b">Tag: {tag}</h2>

        {posts.map(post => (
          <div key={post.node.id} class="post border-gray-400 border-b mb-12">
            <h2 class="text-3xl font-bold">
              <Link
                to={`blog/${post.node.fields.slug}`}
                className="text-copy-primary"
              >
                {post.node.frontmatter.title}
              </Link>
            </h2>
            <div class="text-copy-secondary mb-4">
              <span>{post.node.frontmatter.date}</span>
              <span> &middot; </span>
              <span>
                <span role="img" aria-label="popcorn">
                  🍿
                </span>
                {post.node.timeToRead} min read
              </span>
              <span> &middot; </span>
              <span>
                posted in{" "}
                <Link
                  to={`category/${post.node.frontmatter.category
                    .toString()
                    .toLowerCase()}`}
                >
                  {post.node.frontmatter.category}
                </Link>
              </span>
            </div>

            <div class="text-lg mb-4">{post.node.frontmatter.description}</div>

            <div class="mb-8">
              <Link
                to={post.node.frontmatter.path}
                className="font-bold uppercase"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM D, Y")
            description
            path
            category
            template
          }
          timeToRead
          id
          fields {
            slug
          }
        }
      }
    }
  }
`

export default tag
