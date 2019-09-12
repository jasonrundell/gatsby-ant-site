import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PaginationList = ({
  styles,
  pagesCount,
  path,
  previousPageNumber,
  nextPageNumber,
  previousBridge,
  nextBridge,
  previousLabel,
  nextLabel,
}) => {
  const linkList = () => {
    let links = []
    for (let i = 1; i <= pagesCount; i++) {
      if (i === 1) {
        links.push(
          <li className={styles.pagination__action} key={i}>
            <Link to={`${path}`}>{i}</Link>
          </li>
        )
      } else {
        links.push(
          <li className={styles.pagination__action} key={i}>
            <Link to={`${path}${i}`}>{i}</Link>
          </li>
        )
      }
    }
    return links
  }

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className={styles.pagination__navigation}>
        {previousPageNumber && (
          <li className={styles.pagination__action}>
            <Link to={`${path}${previousPageNumber}`}>{previousLabel}</Link>
          </li>
        )}
        {linkList()}
        {nextPageNumber && (
          <li className={styles.pagination__action}>
            <Link to={`${path}${nextPageNumber}`}>{nextLabel}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

PaginationList.defaultProps = {
  styles: { pagination__navigation: '', pagination__action: '' },
  previousBridge: '...',
  nextBridge: '...',
  previousLabel: '< Previous Page',
  nextLabel: 'Next Page >',
}

PaginationList.propTypes = {
  styles: PropTypes.object,
  pagesCount: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  previousPageNumber: PropTypes.number,
  nextPageNumber: PropTypes.number,
  previousBridge: PropTypes.string,
  nextBridge: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
}

export default PaginationList
