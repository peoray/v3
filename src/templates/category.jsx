import React from "react"
import DefaultLayout from "../layout/Index"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"

function tag(props) {
  const { category } = props.pageContext
  const posts = props.data.allMarkdownRemark.edges

  return (
    <DefaultLayout>
      <Helmet title={`Posts in category "${category}" – ${config.siteTitle}`} />
      <div class="container-inner mx-auto my-16">
        <h2 class="text-4xl font-bold mb-8 border-b">Category: {category}</h2>

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
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
