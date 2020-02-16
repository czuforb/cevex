/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const RefPage = path.resolve("./src/templates/RefPage.js")

  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const Posts = result.data.allWordpressPost.edges
  Posts.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: RefPage,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })
}
