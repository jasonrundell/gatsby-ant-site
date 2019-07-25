import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default props => {
  const { data, pageContext, path, tag } = props
  const { tagResult } = pageContext
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[
        { path: '/tags', text: 'Tags' },
        { path: path, text: pageContext.tag },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Tags`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <h1>
        {tagResult.length} post{tagResult.length === 1 ? '' : 's'} tagged with{' '}
        {tag}
      </h1>
      <ul>
        {tagResult.map(({ id, frontmatter, excerpt }) => {
          return (
            <li key={id}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <p>{excerpt}</p>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagResults {
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
