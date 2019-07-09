import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default function Template(props) {
  const { data, pageContext } = props;
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;
  return (
    <Layout 
      title={data.site.siteMetadata.title}
    >
      <div>
        <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />
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
      </div>
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
      }
    }
  }
`;