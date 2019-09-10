import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Pagination = ({
  styles,
  previousUrl,
  nextUrl,
  previousLabel,
  nextLabel,
}) => (
  <nav role="navigation" aria-label="Pagination Navigation">
    <ul className={styles.pagination__navigation}>
      <li className={styles.pagination__action}>
        <Link to={previousUrl}>{previousLabel}</Link>
      </li>
      <li className={styles.pagination__action}>
        <Link to={nextUrl}>{nextLabel}</Link>
      </li>
    </ul>
  </nav>
)

Pagination.defaultProps = {
  styles: { pagination__navigation: '', pagination__action: '' },
  previousUrl: '',
  nextUrl: '',
  previousLabel: 'Previous',
  nextLabel: 'Next',
}

Pagination.propTypes = {
  styles: PropTypes.object,
  previousUrl: PropTypes.string,
  nextUrl: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
}

export default Pagination
