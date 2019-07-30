import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default props => {
  const { data } = props
  const { allMarkdownRemark } = data
  const { group } = allMarkdownRemark
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[{ path: '/tags/', text: 'Tags' }]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Tags`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <h1>All Tags</h1>
      <ul>
        {group.map(item => (
          <li key={item.fieldValue}>
            <Link to={`/tags/${item.fieldValue}`}>
              {item.fieldValue} ({item.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">All posts</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
