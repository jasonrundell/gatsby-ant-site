import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

const TagsList = ({ tags = [] }) => (
  <ul>
    {tags.map(tag => (
      <li key={tag}>
        <Tag>
          <Link to={`/tags/${tag}/`}>{tag}</Link>
        </Tag>
      </li>
    ))}
  </ul>
)

TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagsList
