import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPostPreviewCard from '../components/blog-post-preview-card'

import styles from './blog-list.module.scss'

export default props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allMarkdownRemark
  const { next, prev } = pageContext // TO DO: currentPage
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
        {posts.map(({ node: post }) => {
          return (
            <li key={post.id} className={styles.listItem}>
              <BlogPostPreviewCard
                image={post.frontmatter.featuredImage}
                altText={post.frontmatter.featuredImageAlt}
                link={post.frontmatter.path}
                author={post.frontmatter.author}
                category={post.frontmatter.category}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
              />
            </li>
          )
        })}
      </ul>
      <div className={styles.page__navigation}>
        {prev && (
          <Link to={`/blog/${prev}`} className={styles.page__action}>
            ← Previous page ({prev})
          </Link>
        )}
        {next && (
          <Link to={`/blog/${next}`} className={styles.page__action}>
            Next page ({next}) →
          </Link>
        )}
      </div>
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
            category
            author
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
