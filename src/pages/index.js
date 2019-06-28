import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Figure from '../components/figure'
import SEO from '../components/seo'

import styles from './index.module.scss'

/*export default () => ({
  render() {
    const { data } = this.props
    const { title, description, author, lang } = data.site.siteMetadata
    const { file } = data

    return (
      <Layout title={title}>
        <SEO title={title} description={description} author={author} lang={lang} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div className={styles.containerFigure}>
          <Figure image={file} altText="Astronaut" />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
})*/

export default ({data}) => (
  <Layout 
    title={data.site.siteMetadata.title}
  >
    <SEO 
      title={data.site.siteMetadata.title} 
      description={data.site.siteMetadata.description} 
      author={data.site.siteMetadata.author} 
      lang={data.site.siteMetadata.lang} 
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div 
      className={styles.containerFigure}
    >
      <Figure 
        image={data.file} 
        altText="Astronaut" 
      />
    </div>
    <Link 
      to="/page-2/"
    >
      Go to page 2
    </Link>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        author,
        lang
      }
    },
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`