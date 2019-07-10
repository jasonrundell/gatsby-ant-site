import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template(props) {
  const { data, pageContext } = props;
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;
  return (
    <Layout 
    title={data.site.siteMetadata.title}
  >
      <SEO 
        title={post.frontmatter.title} 
        description={post.frontmatter.description} 
        author={post.frontmatter.author} 
        lang={data.site.siteMetadata.lang} 
      />
      <article>
        <h1>
          {post.frontmatter.title}
        </h1>
        <h2>
          {post.frontmatter.date}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div>
          {prev &&
            <Link to={prev.frontmatter.path}>
              {prev.frontmatter.title}
            </Link>}
          {next &&
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title}
            </Link>}
        </div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title,
        description,
        author,
        lang
      }
    },
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
`;