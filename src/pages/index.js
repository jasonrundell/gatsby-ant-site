import React from 'react'
import { Link, graphql } from 'gatsby'
import { Typography, Row } from 'antd'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPostCard from '../components/BlogPostCard'

const { Title } = Typography

export default ({ data }) => {
  const latestPost = data.allMarkdownRemark.edges[0].node.frontmatter

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
        <Title level={3}>Latest blog post</Title>
      </Row>
      <Row type="flex" justify="start">
        <BlogPostCard
          image={latestPost.featured_image}
          altText={latestPost.featured_image_alt}
          link={latestPost.path}
          author={latestPost.author}
          category={latestPost.category}
          title={latestPost.title}
          date={latestPost.date}
          excerpt={latestPost.the_excerpt}
        />
      </Row>
      <Row type="flex" justify="start">
        <Link to="/blog/">Go to the Blog</Link>
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
      limit: 1
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
