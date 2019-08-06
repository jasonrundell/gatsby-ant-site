const path = require('path')

const createTagPages = (createPage, edges) => {
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

const createCategoryPages = (createPage, edges) => {
  const categoryResultsTemplate = path.resolve(
    `src/templates/category-results.js`
  )
  const categoryResults = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.category) {
      const category = node.frontmatter.category
      if (!categoryResults[category]) {
        categoryResults[category] = []
      }
      categoryResults[category].push(node)
    }
  })

  Object.keys(categoryResults).forEach(category => {
    const categoryResult = categoryResults[category]
    createPage({
      path: `/categories/${category}`,
      component: categoryResultsTemplate,
      context: {
        categoryResults,
        categoryResult,
        category,
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
              category
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
    createCategoryPages(createPage, posts)

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
