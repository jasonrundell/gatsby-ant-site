const path = require('path')

const createTagPages = (createPage, edges) => {
  const tagPageTemplate = path.resolve(`src/pages/tags.js`)
  const tagResultsTemplate = path.resolve(`src/templates/tag-results.js`)
  const tagResults = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!tagResults[tag]) {
          tagResults[tag] = []
        }
        tagResults[tag].push(node)
      })
    }
  })

  Object.keys(tagResults).forEach(tagName => {
    const tagResult = tagResults[tagName]
    createPage({
      path: `/tags/${tagName}`,
      component: tagResultsTemplate,
      context: {
        tagResults,
        tagResult,
        tag: tagName,
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            timeToRead
            frontmatter {
              date
              path
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    createTagPages(createPage, posts)

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node
      const next = index === posts.length - 1 ? null : posts[index + 1].node
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next,
        },
      })
    })

    return posts
  })
}
