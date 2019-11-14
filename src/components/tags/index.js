import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Tags = ({ list = [] }) => (
  <ul>
    {list.map(tag => (
      <li key={tag}>
        <Link to={`/tags/${tag}`}>{tag}</Link>
      </li>
    ))}
  </ul>
)

Tags.propTypes = {
  list: PropTypes.array.isRequired,
}

export default Tags
