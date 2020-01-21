import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'
import { Icon, Pagination } from 'antd'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TagsList from '../components/TagsList'

import formatCategoryTitle from '../utils/formatCategoryTitle'
import formatAuthorName from '../utils/formatAuthorName'

import './blog-post.css'
import styles from './blog-post.module.scss'

export default props => {
  const { data, pageContext } = props
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  const {
    meta_title,
    meta_description,
    path,
    title,
    author,
    date,
    category,
    tags,
  } = post.frontmatter
  const easyDate = moment(date).format('MMMM DD, YYYY')
  const categoryFormatted = formatCategoryTitle(category)
  const authorFormatted = formatAuthorName(author)
  const previousUrl = prev ? prev.frontmatter.path : null
  const previousLabel = prev ? prev.frontmatter.title : null
  const nextUrl = next ? next.frontmatter.path : null
  const nextLabel = next ? next.frontmatter.title : null

  const paginationItemRender = (current, type, originalElement) => {
    if (previousUrl && type === 'prev') {
      return (
        <Link to={previousUrl}>
          <Icon type="left" /> Previous post: {previousLabel}
        </Link>
      )
    }

    if (nextUrl && type === 'next') {
      return (
        <Link to={nextUrl}>
          Next post: {nextLabel}
          <Icon type="right" />
        </Link>
      )
    }

    if (type === 'page') {
      return null
    }

    return originalElement
  }

  return (
    <Layout
      title={data.site.siteMetadata.title}
      pathname={path}
      crumbs={[
        { path: '/blog/', text: 'Blog' },
        { path: path, text: title },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Blog: ${meta_title}`}
        description={meta_description}
        author={author}
        lang={data.site.siteMetadata.lang}
      />
      <article>
        <h1>{title}</h1>
        <p className={styles.post__meta}>
          <Link to={`/authors/${author}/`}>{authorFormatted}</Link> |{' '}
          <time dateTime={date}>{easyDate}</time> |{' '}
          <Link to={`/categories/${category}/`}>{categoryFormatted}</Link>
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3>Tags</h3>
        <TagsList tags={tags || []} />
        <Pagination itemRender={paginationItemRender} />
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
        meta_title
        meta_description
      }
    }
  }
`
