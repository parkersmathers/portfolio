const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `work` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workTemplate = path.resolve(`src/templates/work.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___title] }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        const projects = result.data.allMarkdownRemark.edges
        projects.forEach(({ node }, index) => {
          const slug = node.fields.slug
          const previous =
            index === 0
              ? projects[projects.length - 1].node
              : projects[index - 1].node
          const next =
            index === projects.length - 1
              ? projects[0].node
              : projects[index + 1].node
          createPage({
            path: slug,
            component: workTemplate,
            // In work template's graphql query, use slug as a
            // GraphQL variable to query for data from markdown file.
            // Pass in context data as props <this.props.pageContext>.
            context: {
              slug,
              previous,
              next
            }
          })

          resolve()
        })
      })
    )
  })
}
