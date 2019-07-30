import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
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
}) => ({
  render() {
    const easyDate = moment(date).format('MMMM DD, YYYY')
    return (
      <div className={styles.card}>
        <Link to={link} aria-hidden="true">
          <div className={styles.post__image}>
            <ImageFluid image={image} alt={altText} />
          </div>
        </Link>
        <header>
          <h2>
            <Link to={link}>{title}</Link>
          </h2>
          <p>
            <time dateTime={date} className={styles.post__date}>
              {easyDate}
            </time>
          </p>
        </header>
        {excerpt && <p>{excerpt}</p>}
      </div>
    )
  },
})

BlogPostPreviewCard.defaultProps = {
  altText: '',
}

BlogPostPreviewCard.propTypes = {
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object,
  excerpt: PropTypes.string,
}

export default BlogPostPreviewCard
