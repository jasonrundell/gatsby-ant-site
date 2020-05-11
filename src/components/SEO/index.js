import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = (props) => (
  <Helmet
    htmlAttributes={{
      lang: props.lang,
    }}
    title={props.title}
    meta={[
      {
        name: `description`,
        content: props.description,
      },
      {
        property: `og:title`,
        content: props.title,
      },
      {
        property: `og:description`,
        content: props.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: props.author,
      },
      {
        name: `twitter:title`,
        content: props.title,
      },
      {
        name: `twitter:description`,
        content: props.description,
      },
    ].concat(props.meta)}
  />
)

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  author: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
