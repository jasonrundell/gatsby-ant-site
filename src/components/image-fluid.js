import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

 const ImageFluid = ({ image, altText }) => (
  <Img fluid={image ? image.childImageSharp.fluid : {}} alt={altText} />
)

ImageFluid.defaultProps = {
  altText: '',
}

ImageFluid.propTypes = {
  altText: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default ImageFluid
