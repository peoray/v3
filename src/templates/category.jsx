import React from "react"
import DefaultLayout from "../layout/Index"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"
import Post from "../components/Post"

function tag(props) {
  const { category } = props.pageContext
  const posts = props.data.allMarkdownRemark.edges

  return (
    <DefaultLayout>
      <Helmet title={`Posts in category "${category}" – ${config.siteTitle}`} />
      <div class="container-inner mx-auto my-16">
        <h2 class="text-4xl font-bold mb-8 border-b">Category: {category}</h2>

        {posts.map(post => (
          <Post post={post} />
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
