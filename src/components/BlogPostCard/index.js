import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import PropTypes from 'prop-types'
import ImageFluid from '../ImageFluid'

import formatCategoryTitle from '../../utils/formatCategoryTitle'
import formatAuthorName from '../../utils/formatAuthorName'

import styles from './index.module.scss'

const BlogPostCard = ({
  image,
  altText,
  title,
  category,
  author,
  date,
  link,
  excerpt,
}) => (
  <>
    <div className={styles.post__image}>
      <Link to={link} aria-hidden="true" tabIndex="-1">
        <ImageFluid image={image} alt={altText} />
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
  </>
)

BlogPostCard.defaultProps = {
  altText: '',
}

BlogPostCard.propTypes = {
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object,
  excerpt: PropTypes.string,
}

export default BlogPostCard
