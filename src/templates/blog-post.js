import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'

import styles from './blog-post.module.scss'

export default props => {
  const { data, pageContext } = props
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[
        { path: '/blog/', text: 'Blog' },
        { path: post.frontmatter.path, text: post.frontmatter.title },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Blog: ${post.frontmatter.title}`}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        lang={data.site.siteMetadata.lang}
      />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <time dateTime={post.frontmatter.date} className={styles.time}>
          {post.frontmatter.date}
        </time>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Tags list={post.frontmatter.tags || []} />
        <div className={styles.navigation}>
          {prev && (
            <Link to={prev.frontmatter.path} className={styles.action}>
              ← Previous post: {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.path} className={styles.action}>
              Next post: {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
        author
        description
      }
    }
  }
`
