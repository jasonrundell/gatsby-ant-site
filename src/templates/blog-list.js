import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPostCard from '../components/BlogPostCard'
import Pagination from '../components/Pagination'

import styles from './blog-list.module.scss'

export default props => {
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
              <BlogPostCard
                image={post.frontmatter.featured_image}
                altText={post.frontmatter.featured_image_alt}
                link={post.frontmatter.path}
                author={post.frontmatter.author}
                category={post.frontmatter.category}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.frontmatter.the_excerpt}
              />
            </li>
          )
        })}
      </ul>
      <div className={styles.pagination__container}>
        <Pagination
          totalPosts={totalPosts}
          pageSize={limit}
          roothPath={'/blog/'}
          previousPageNumber={previousPageNumber}
          nextPageNumber={nextPageNumber}
          previousBridge={'...'}
          nextBridge={'...'}
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
