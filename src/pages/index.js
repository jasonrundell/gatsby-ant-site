import React from 'react'
import { Link, graphql } from 'gatsby'
import { Typography, Row } from 'antd'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPostList from '../components/BlogPostList'

const { Title } = Typography

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={data.site.siteMetadata.title} pathname="/">
      <SEO
        title={`${data.site.siteMetadata.title} | Home`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <Row type="flex" justify="center">
        <Title>{data.site.siteMetadata.title}</Title>
      </Row>
      <Row type="flex" justify="center">
        <Title level={2}>
          A starter blog site made with Gatsby and Ant Design
        </Title>
      </Row>
      <Row type="flex" justify="start">
        <Title level={3}>Latest blog posts</Title>
      </Row>
      <Row type="flex" justify="start">
        <BlogPostList posts={posts} />
      </Row>
    </Layout>
  )
}

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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            the_excerpt
            date(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
            category
            author
            path
            featured_image {
              childImageSharp {
                fluid(maxWidth: 304) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featured_image_alt
          }
        }
      }
    }
  }
`
