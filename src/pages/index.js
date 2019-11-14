import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Button from '../components/button'
import Icon from '../components/icons'

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <SEO
      title={`${data.site.siteMetadata.title} | Home`}
      description={data.site.siteMetadata.description}
      author={data.site.siteMetadata.author}
      lang={data.site.siteMetadata.lang}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Section isLarge={true}>
      <Button>Default</Button>
      <Button isBrand={true}>Brand</Button>
      <Button isLight={true}>Light</Button>
      <Button isDark={true}>Dark</Button>
      <Button isBrandInverse={true}>Brand Inverse</Button>
      <Button isLightInverse={true}>Light Inverse</Button>
      <Button isDarkInverse={true}>Dark Inverse</Button>
    </Section>
    <Section isConstrained={true}>
      <Icon icon="checkmark" />
      <Icon icon="checkmark" isBrand={true} />
      <Icon icon="checkmark" isLight={true} />
      <Icon icon="checkmark" isDark={true} />
    </Section>
    <Section>
      <Icon icon="dot" />
      <Icon icon="dot" isBrand={true} />
      <Icon icon="dot" isLight={true} />
      <Icon icon="dot" isDark={true} />
    </Section>
    <Section>
      <Icon icon="tooltip" />
      <Icon icon="tooltip" isBrand={true} />
      <Icon icon="tooltip" isLight={true} />
      <Icon icon="tooltip" isDark={true} />
    </Section>
    <Section>
      <Link to="/blog/">Go to the Blog</Link>
    </Section>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
