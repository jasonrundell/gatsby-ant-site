import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const { description } = data.site.siteMetadata
    const { author } = data.site.siteMetadata
    const lang = 'en'

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title={title} description={description} author={author} lang={lang} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        author
      }
    }
  }
`