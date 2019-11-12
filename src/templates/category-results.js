import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import formatCategoryTitle from '../utils/formatCategoryTitle'

export default props => {
  const { data, pageContext, path } = props
  const { categoryResult, category } = pageContext
  const categoryFormatted = formatCategoryTitle(category)
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[
        { path: '/categories', text: 'Categories' },
        { path: path, text: pageContext.category },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Category: '${categoryFormatted}'`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <h1>
        {categoryResult.length} post{categoryResult.length === 1 ? '' : 's'} in
        '{categoryFormatted}'
      </h1>
      <ul>
        {categoryResult.map(({ id, frontmatter, excerpt }) => {
          return (
            <li key={id}>
              <Link to={frontmatter.slug}>{frontmatter.title}</Link>
              <p>{excerpt}</p>
            </li>
          )
        })}
      </ul>
      <Link to="/categories">All categories</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryResults {
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
