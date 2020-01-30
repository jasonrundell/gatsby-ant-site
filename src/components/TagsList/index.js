import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

import styles from './index.module.scss'

const TagsList = ({ tags = [] }) => (
  <ul className={styles.root}>
    {tags.map(tag => (
      <li className={styles.listItem} key={tag}>
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
