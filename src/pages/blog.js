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
      <section>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <article key={post.id} className={styles.postContainer}>
                <h1>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
                <Link to={post.frontmatter.path}>Read more</Link>
              </article>
            )
          })}
      </section>
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
