import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ImageFluid from '../image-fluid'

import styles from './blog-post-preview-card.module.scss'

const BlogPostPreviewCard = ({
  image,
  altText,
  title,
  date,
  link,
  excerpt,
  ctaLabel,
}) => ({
  render() {
    return (
      <div className={styles.card}>
        {image && <ImageFluid image={image} alt={altText} />}
        <header>
          <h2>
            <Link to={link}>{title}</Link>
          </h2>
          <p>
            <time dateTime={date}>{date}</time>
          </p>
        </header>
        {excerpt && <p>{excerpt}</p>}
        <Link to={link} className={styles.cta__link}>
          {ctaLabel}
        </Link>
      </div>
    )
  },
})

BlogPostPreviewCard.defaultProps = {
  altText: '',
  ctaLabel: 'Continue Reading',
}

BlogPostPreviewCard.propTypes = {
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object,
  excerpt: PropTypes.string,
}

export default BlogPostPreviewCard
