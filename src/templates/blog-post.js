import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'

import formatCategoryTitle from '../utils/formatCategoryTitle'
import formatAuthorName from '../utils/formatAuthorName'

import styles from './blog-post.module.scss'

export default props => {
  const { data, pageContext } = props
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  const {
    path,
    title,
    description,
    author,
    date,
    category,
    tags,
  } = post.frontmatter
  const easyDate = moment(date).format('MMMM DD, YYYY')
  const categoryFormatted = formatCategoryTitle(category)
  const authorFormatted = formatAuthorName(author)
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[{ path: '/blog/', text: 'Blog' }, { path: path, text: title }]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Blog: ${title}`}
        description={description}
        author={author}
        lang={data.site.siteMetadata.lang}
      />
      <article>
        <h1>{title}</h1>
        <p className={styles.post__meta}>
          <Link to={`/authors/${author}`}>{authorFormatted}</Link> |{' '}
          <time dateTime={date}>{easyDate}</time> |{' '}
          <Link to={`/categories/${category}`}>{categoryFormatted}</Link>
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3>Tags</h3>
        <Tags list={tags || []} />
        <div className={styles.post__navigation}>
          {prev && (
            <Link to={prev.frontmatter.path} className={styles.post__action}>
              ← Previous post: {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.path} className={styles.post__action}>
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
        date(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
        path
        tags
        title
        category
        author
        description
      }
    }
  }
`
