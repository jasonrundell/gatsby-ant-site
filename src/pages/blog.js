import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
// import SEO from '../components/seo'

import styles from './blog.module.scss'

export default function Blog(props) {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout title={data.site.siteMetadata.title}>
      <ul>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <li key={post.id}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
      </ul>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
