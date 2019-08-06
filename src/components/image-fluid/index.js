import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ImageFluid = ({ image, altText, tabIndex }) => (
  <Img
    fluid={image ? image.childImageSharp.fluid : {}}
    alt={altText}
    tabIndex={tabIndex}
  />
)

ImageFluid.defaultProps = {
  altText: '',
}

ImageFluid.propTypes = {
  altText: PropTypes.string,
  tabIndex: PropTypes.number,
  image: PropTypes.object.isRequired,
}

export default ImageFluid
