const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { resolve } = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: "markdown" })
    createNodeField({
      node,
      name: "slug",
      value: `/about-us/board${slug}`,
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
      component: path.resolve(`./src/templates/board-info.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// exports.creatPages = ({ graphql, actions }) => {
//   const { creatPage } = actions

//   return new Promise(resolve => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         this.creatPage({
//           path: node.fields.slug,
//           component: path.resolve("./src/templates/board-info.js"),
//           context: {
//             slug: node.fields.slug,
//           },
//         })
//       })

//       resolve()
//     })
//   })
// }
