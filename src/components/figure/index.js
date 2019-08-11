import React from 'react'
import PropTypes from 'prop-types'
import ImageFluid from '../image-fluid'

const Figure = ({ altText, caption, image }) => (
  <figure>
    <ImageFluid image={image} alt={altText} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
)

Figure.defaultProps = {
  altText: '',
  caption: '',
}

Figure.propTypes = {
  altText: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default Figure
