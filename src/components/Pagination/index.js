import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

const PaginationList = ({
  totalPosts,
  pageSize,
  rootPath,
  previousPageNumber,
  nextPageNumber,
  previousLabel,
  nextLabel,
  currentPage,
}) => {
  const linkList = () => {
    let links = []
    let linkClassName
    const numberOfPages = Math.ceil(totalPosts / pageSize)
    for (let i = 1; i <= numberOfPages; i++) {
      if (i === currentPage) {
        linkClassName = `ant-pagination-item ant-pagination-item-${i} ant-pagination-item-active`
      } else {
        linkClassName = `ant-pagination-item ant-pagination-item-${i}`
      }
      if (i === 1) {
        links.push(
          <li key={i} className={linkClassName}>
            <Link to={`${rootPath}`}>{i}</Link>
          </li>
        )
      } else {
        links.push(
          <li key={i} className={linkClassName}>
            <Link to={`${rootPath}${i}`}>{i}</Link>
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
            <Link to={`${rootPath}${previousPageNumber}`}>
              <Icon type="left" /> {previousLabel}
            </Link>
          </li>
        )}
        {linkList()}
        {nextPageNumber && (
          <li className="ant-pagination-next">
            <Link to={`${rootPath}${nextPageNumber}`}>
              {nextLabel} <Icon type="right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

PaginationList.defaultProps = {
  previousLabel: 'Previous Page',
  nextLabel: 'Next Page',
}

PaginationList.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  rootPath: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  previousPageNumber: PropTypes.number,
  nextPageNumber: PropTypes.number,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
}

export default PaginationList
