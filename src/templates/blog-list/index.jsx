import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import BlogPostList from '../../components/BlogPostList'
import Pagination from '../../components/Pagination'

import styles from './blog-list.module.scss'

export default (props) => {
  const { data, pageContext } = props
  const { edges: posts } = data.allMarkdownRemark
  const {
    totalPosts,
    limit,
    previousPageNumber,
    nextPageNumber,
    currentPage,
  } = pageContext

  return (
    <Layout
      title={data.site.siteMetadata.title}
      pathname="/blog/"
      crumbs={[
        {
          path: '/',
          breadcrumbName: 'Home',
        },
        { path: '/blog/', breadcrumbName: 'Blog' },
      ]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Blog`}
        description={`Blog posts by ${data.site.siteMetadata.author}`}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <BlogPostList posts={posts} />
      <div className={styles.pagination__container}>
        <Pagination
          totalPosts={totalPosts}
          pageSize={limit}
          rootPath={'/blog/'}
          previousPageNumber={previousPageNumber}
          nextPageNumber={nextPageNumber}
          currentPage={currentPage}
        />
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
