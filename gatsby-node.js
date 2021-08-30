const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `/blog/` directory into `/blog/slug`
    const slug = createFilePath({ node, getNode, basePath: "blog" })

    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}