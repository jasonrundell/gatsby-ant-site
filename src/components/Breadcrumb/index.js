import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'antd'

import styles from './Breadcrumb.module.scss'

export default ({ crumbs }) => {
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }

  return (
    <Breadcrumb
      className={styles.root}
      aria-label="Breadcrumb"
      itemRender={itemRender}
      routes={crumbs}
    />
  )
}
