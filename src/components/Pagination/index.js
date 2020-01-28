import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

const PaginationList = ({
  totalPosts,
  pageSize,
  roothPath,
  previousPageNumber,
  nextPageNumber,
  previousBridge,
  nextBridge,
  previousLabel,
  nextLabel,
  currentPage,
}) => {
  const linkList = () => {
    let links = []
    let linkClassName
    for (let i = 1; i <= pageSize; i++) {
      if (i === currentPage) {
        linkClassName = `ant-pagination-item ant-pagination-item-${i} ant-pagination-item-active`
      } else {
        linkClassName = `ant-pagination-item ant-pagination-item-${i}`
      }
      if (i === 1) {
        links.push(
          <li key={i} className={linkClassName}>
            <Link to={`${roothPath}`}>{i}</Link>
          </li>
        )
      } else {
        links.push(
          <li key={i} className={linkClassName}>
            <Link to={`${roothPath}${i}`}>{i}</Link>
          </li>
        )
      }
    }
    return links
  }

  let prevClassName = `ant-pagination-prev`
  if (currentPage === 1) {
    prevClassName = `ant-pagination-disabled ant-pagination-prev`
  } else {
    prevClassName = `ant-pagination-prev`
  }

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul>
        {previousPageNumber && (
          <li className={prevClassName}>
            <Link to={`${roothPath}${previousPageNumber}`}>
              <Icon type="left" /> {previousLabel}
            </Link>
          </li>
        )}
        {linkList()}
        {nextPageNumber && (
          <li className="ant-pagination-next">
            <Link to={`${roothPath}${nextPageNumber}`}>
              {nextLabel} <Icon type="right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

PaginationList.defaultProps = {
  previousBridge: '...',
  nextBridge: '...',
  previousLabel: 'Previous Page',
  nextLabel: 'Next Page',
}

PaginationList.propTypes = {
  pageSize: PropTypes.number.isRequired,
  roothPath: PropTypes.string.isRequired,
  previousPageNumber: PropTypes.number,
  nextPageNumber: PropTypes.number,
  previousBridge: PropTypes.string,
  nextBridge: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  currentPage: PropTypes.string,
}

export default PaginationList
