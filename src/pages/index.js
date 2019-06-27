import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Figure from '../components/figure'
import SEO from '../components/seo'

const Index = () => ({
  render() {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const { description } = data.site.siteMetadata
    const { author } = data.site.siteMetadata
    const { file } = data
    const lang = 'en'

    return (
      <Layout title={title}>
        <SEO title={title} description={description} author={author} lang={lang} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Figure image={file} altText="Astronaut" />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
})

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        author
      }
    },
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`