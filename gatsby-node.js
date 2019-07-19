const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//Tell plugins to add pages.
//called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 100
        ) {
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM")
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    // const next = index === posts.length-1 ? null : posts[index-1].node
    // const previous = index === 0 ? null : posts[index-1].node

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      // optional context data to be inserted as props into the page component..
      context: {
        slug: post.node.fields.slug,
        // previous,
        // next
      }
    })
  })
}

//Called when a new node is created. Plugins wishing to extend or transform nodes created by other plugins should implement this API.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
