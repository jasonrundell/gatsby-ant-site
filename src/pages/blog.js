import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageFluid from '../components/image-fluid'

import styles from './blog.module.scss'

export default props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[{ path: '/blog/', text: 'Blog' }]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Blog`}
        description={`Blog posts by ${data.site.siteMetadata.author}`}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <ul className={styles.list}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <li key={post.id}>
                <div className={styles.card}>
                  <ImageFluid
                    image={post.frontmatter.featuredImage}
                    alt={post.frontmatter.featuredImageAlt}
                  />
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </div>
              </li>
            )
          })}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
