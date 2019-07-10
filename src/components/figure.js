import React from 'react'
import PropTypes from 'prop-types'
import ImageFluid from './image-fluid'

const Figure = ({ altText, caption, image }) => ({
  render() {
    let dataCaption = ''
    if (caption) {
      dataCaption = <figcaption>{caption}</figcaption>
    }

    return (
      <figure>
        <ImageFluid image={image} alt={altText} />
        {dataCaption}
      </figure>
    )
  },
})

Figure.defaultProps = {
  altText: '',
}

Figure.propTypes = {
  altText: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default Figure
