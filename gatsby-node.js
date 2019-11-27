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
      path: `/tags/${tagName}/`,
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
      path: `/categories/${category}/`,
      component: categoryResultsTemplate,
      context: {
        categoryResults,
        categoryResult,
        category,
      },
    })
  })
}

const createAuthorPages = (createPage, edges) => {
  const authorResultsTemplate = path.resolve(`src/templates/author-results.js`)
  const authorResults = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.author) {
      const author = node.frontmatter.author
      if (!authorResults[author]) {
        authorResults[author] = []
      }
      authorResults[author].push(node)
    }
  })

  Object.keys(authorResults).forEach(author => {
    const authorResult = authorResults[author]
    createPage({
      path: `/authors/${author}/`,
      component: authorResultsTemplate,
      context: {
        authorResults,
        authorResult,
        author,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
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
              author
              category
              tags
              title
              meta_title
              meta_description
              the_excerpt
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  createTagPages(createPage, posts)
  createCategoryPages(createPage, posts)
  createAuthorPages(createPage, posts)

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

  // Create Blog pagination

  // Take posts length and divide by X, ceil it
  const limit = 4
  const totalPosts = posts.length
  const numPages = Math.ceil(totalPosts / limit)
  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1
    const previousPageNumber = i === 0 ? null : currentPage - 1
    const nextPageNumber = i === totalPosts ? null : currentPage + 1
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        previousPageNumber,
        previousPageUrl: `/blog/${previousPageNumber}/`,
        nextPageNumber,
        nextPageUrl: `/blog/${nextPageNumber}/`,
        limit,
        skip: i * limit,
        totalPosts,
        numPages,
        currentPage,
      },
    })
  })

  // Redirects
  createRedirect({
    fromPath: '/blog/1/',
    toPath: '/blog/',
    isPermanent: true,
    redirectInBrowser: true,
  })

  createRedirect({
    fromPath: '/blog/1',
    toPath: '/blog/',
    isPermanent: true,
    redirectInBrowser: true,
  })
}
