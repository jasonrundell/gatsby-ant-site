import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Layout } from 'antd'

import SkipToMain from '../SkipToMain'
import Breadcrumb from '../Breadcrumb'
import MainNav from '../MainNav'

import 'antd/dist/antd.css'
import '../../styles/antd-overrides.scss'

import styles from './Layout.module.scss'

const { Header, Content, Footer } = Layout

const _Layout = ({ title, crumbs, children, pathname }) => {
  return (
    <>
      <Header className={styles.header}>
        <Link to="/" className={styles.siteName}>
          {title}
        </Link>
        <MainNav pathname={pathname} />
      </Header>
      <SkipToMain />
      <Content id="main" className={styles.content}>
        {crumbs && <Breadcrumb crumbs={crumbs} />}
        {children}
      </Content>
      <Footer className={styles.footer}>
        © {new Date().getFullYear()}. Built with
        {` `}
        <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">
          Gatsby
        </a>{' '}
        and{' '}
        <a href="https://ant.design/" rel="noopener noreferrer">
          Ant Design
        </a>
        .{` `}
      </Footer>
    </>
  )
}

_Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default _Layout
