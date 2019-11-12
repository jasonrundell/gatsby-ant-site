import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import PropTypes from 'prop-types'
import ImageFluid from '../image-fluid'

import formatCategoryTitle from '../../utils/formatCategoryTitle'
import formatAuthorName from '../../utils/formatAuthorName'

import styles from './blog-post-preview-card.module.scss'

const BlogPostPreviewCard = ({
  image,
  altText,
  title,
  category,
  author,
  date,
  link,
  excerpt,
}) => (
  <div>
    <div className={styles.post__image}>
      <Link to={link} aria-hidden="true" tabIndex="-1">
        <ImageFluid image={image} alt={altText} />
        <p>{title}</p>
      </Link>
    </div>
    <header>
      <h2>
        <Link to={link}>{title}</Link>
      </h2>
      <p className={styles.post__meta}>
        <Link to={`/authors/${author}`}>{formatAuthorName(author)}</Link> |{' '}
        <time dateTime={date}>{moment(date).format('MMMM DD, YYYY')}</time> |{' '}
        <Link to={`/categories/${category}`}>
          {formatCategoryTitle(category)}
        </Link>
      </p>
    </header>
    {excerpt && <p>{excerpt}</p>}
  </div>
)

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
