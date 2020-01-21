import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/SearchEngineOptimization'

import formatAuthorName from '../../utils/formatAuthorName'

export default props => {
  const { data } = props
  const { allMarkdownRemark } = data
  const { group } = allMarkdownRemark
  return (
    <Layout
      title={data.site.siteMetadata.title}
      pathname="/authors/"
      crumbs={[{ path: '/authors/', text: 'Authors' }]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Authors`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <h1>All Authors</h1>
      <ul>
        {group.map(item => (
          <li key={item.fieldValue}>
            <Link to={`/authors/${item.fieldValue}`}>
              {formatAuthorName(item.fieldValue)} ({item.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/blog/">All posts</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorsQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___author) {
        fieldValue
        totalCount
      }
    }
  }
`
