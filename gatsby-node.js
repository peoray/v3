const path = require("path")
const kebabCase = require("lodash.kebabcase")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const {slug} = node.frontmatter
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/post.jsx")
  const tagTemplate = path.resolve("./src/templates/tag.jsx")
  // const categoryTemplate = path.resolve("./src/templates/category.jsx")
  const res = await graphql(`
    query {
      allMarkdownRemark (
        sort: {order: ASC, fields: [frontmatter___date]} 
      ) {
        edges {
          node {
            frontmatter {
              tags
              template
              path
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    console.log(res.errors)
  }

  const posts = res.data.allMarkdownRemark.edges

  const tagSet = new Set()
  // const categorySet = new Set()

  posts.forEach((edge, index) => {
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    }

    // if (edge.node.frontmatter.category) {
    //   edge.node.frontmatter.category.forEach(category => {
    //     categorySet.add(category)
    //   })
    // }

    if (edge.node.frontmatter.template === "post") {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
          previous: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node
        },
      })
    }

    const tagList = Array.from(tagSet)
    tagList.forEach(tag => {
      createPage({
        path: `/tag/${kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    // const categoryList = Array.from(categorySet)
    // categoryList.forEach(category => {
    //   createPage({
    //     path: `/category/${category.toLowerCase()}/`,
    //     component: categoryTemplate,
    //     context: {
    //       category,
    //     },
    //   })
    // })
  })
}