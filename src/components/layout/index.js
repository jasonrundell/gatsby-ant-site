import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Layout, Menu } from 'antd'

import SkipToMain from '../skip-to-main'
// import Header from '../header'
import Breadcrumb from '../breadcrumb'

import styles from './layout.module.scss'

import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout

const _Layout = ({ title, crumbs, children }) => {
  return (
    <>
      <SkipToMain />
      <Header>
        <Link to="/" className={styles.siteName}>
          {title}
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/blog/">Blog</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about/">About</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact/">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content id="main" className={styles.root}>
        {crumbs && <Breadcrumb crumbs={crumbs} />}
        {children}
      </Content>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">
          Gatsby
        </a>
        .{` `}
        Calin says hello.
      </Footer>
    </>
  )
}

_Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default _Layout
