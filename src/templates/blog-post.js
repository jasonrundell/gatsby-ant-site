import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'
import { Row, Typography } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TagsList from '../components/TagsList'

import formatCategoryTitle from '../utils/formatCategoryTitle'
import formatAuthorName from '../utils/formatAuthorName'

import './blog-post.css'
import styles from './blog-post.module.scss'

const { Title, Paragraph } = Typography

export default (props) => {
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

  return (
    <Layout
      title={data.site.siteMetadata.title}
      pathname={path}
      crumbs={[
        {
          path: '/',
          breadcrumbName: 'Home',
        },
        { path: '/blog/', breadcrumbName: 'Blog' },
        { path: path, breadcrumbName: title },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Blog: ${meta_title}`}
        description={meta_description}
        author={author}
        lang={data.site.siteMetadata.lang}
      />
      <article>
        <Row type="flex" justify="center">
          <Title>{title}</Title>
        </Row>
        <Row type="flex" justify="center">
          <Paragraph className={styles.post__meta}>
            <Link to={`/authors/${author}/`}>{authorFormatted}</Link> |{' '}
            <time dateTime={date}>{easyDate}</time> |{' '}
            <Link to={`/categories/${category}/`}>{categoryFormatted}</Link>
          </Paragraph>
        </Row>
        <Row type="flex">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Row>
        <Row type="flex">
          <Title level={4}>Tags</Title>
        </Row>
        <Row type="flex">
          <TagsList tags={tags || []} />
        </Row>
        <Row type="flex" justify="space-between">
          {prev && (
            <Link to={previousUrl}>
              <LeftOutlined /> Previous post: {previousLabel}
            </Link>
          )}
          {next && (
            <Link to={nextUrl}>
              Next post: {nextLabel}
              <RightOutlined />
            </Link>
          )}
        </Row>
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
