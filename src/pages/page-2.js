import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => ({
  render() {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const { description } = data.site.siteMetadata
    const { author } = data.site.siteMetadata
    const lang = 'en'

    return (
      <Layout title={title}>
        <SEO title={title} description={description} author={author} lang={lang} />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }  
})

export default SecondPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        author
      }
    }
  }
`