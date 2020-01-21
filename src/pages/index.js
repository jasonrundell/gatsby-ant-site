import React from 'react'
import { Link, graphql } from 'gatsby'
import { Typography } from 'antd'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const { Title, Paragraph } = Typography

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title} pathname="/">
    <SEO
      title={`${data.site.siteMetadata.title} | Home`}
      description={data.site.siteMetadata.description}
      author={data.site.siteMetadata.author}
      lang={data.site.siteMetadata.lang}
    />
    <Title>Hey world</Title>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>
      <Link to="/blog/">Go to the Blog</Link>
    </Paragraph>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
