import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'antd'

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
      aria-label="Breadcrumb"
      itemRender={itemRender}
      routes={crumbs}
    />
  )
}
