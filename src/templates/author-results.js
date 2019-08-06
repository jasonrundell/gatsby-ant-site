import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import formatAuthorName from '../utils/formatAuthorName'

export default props => {
  const { data, pageContext, path } = props
  const { authorResult, author } = pageContext
  const authorFormatted = formatAuthorName(author)
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[
        { path: '/authors', text: 'Authors' },
        { path: path, text: pageContext.author },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Author: '${authorFormatted}'`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <h1>
        {authorResult.length} post{authorResult.length === 1 ? '' : 's'} by '
        {authorFormatted}'
      </h1>
      <ul>
        {authorResult.map(({ id, frontmatter, excerpt }) => {
          return (
            <li key={id}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <p>{excerpt}</p>
            </li>
          )
        })}
      </ul>
      <Link to="/authors">All authors</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorsResults {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
  }
`
