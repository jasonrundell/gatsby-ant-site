import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPostPreviewCard from '../components/blog-post-preview-card'
import PaginationList from '../components/pagination-list'

import styles from './blog-list.module.scss'

export default props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allMarkdownRemark
  const { nextPageNumber, previousPageNumber, numPages } = pageContext
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
                link={post.frontmatter.slug}
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
      <div className={styles.pagination__container}>
        <PaginationList
          styles={styles}
          pagesCount={numPages}
          path={'/blog/'}
          previousPageNumber={previousPageNumber}
          nextPageNumber={nextPageNumber}
          previousBridge={'...'}
          nextBridge={'...'}
          previousLabel={'< Previous Page'}
          nextLabel={'Next Page >'}
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
            date(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
            category
            author
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 304) {
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
