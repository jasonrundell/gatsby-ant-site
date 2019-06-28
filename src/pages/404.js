import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data}) => (
  <Layout 
    title={data.site.siteMetadata.title}
  >
    <SEO 
      title={data.site.siteMetadata.title} 
      description={data.site.siteMetadata.description} 
      author={data.site.siteMetadata.author} 
      lang={data.site.siteMetadata.lang} 
    />
    <h1>Not found</h1>
    <p>Sorry folks, nothing here to see.</p>
    <Link 
      to="/"
    >
      Go back to the homepage
    </Link>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        author,
        lang
      }
    }
  }
`