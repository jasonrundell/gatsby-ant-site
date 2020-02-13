import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Layout, Menu, List, Popover, Button, Icon } from 'antd'

import SkipToMain from '../SkipToMain'
import Breadcrumb from '../Breadcrumb'

import 'antd/dist/antd.css'
import '../../styles/antd-overrides.scss'

import styles from './Layout.module.scss'

const { Header, Content, Footer } = Layout

const _Layout = ({ title, crumbs, children, pathname }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false)

  const mobileMenuOnClick = () => {
    if (menuCollapsed) {
      setMenuCollapsed(false)
    } else {
      setMenuCollapsed(true)
    }
  }

  const mobileMenuData = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'Products',
      url: '/products/',
    },
    {
      title: 'Contact Us',
      url: '/contact-us/',
    },
  ]

  const mobileMenuList = (
    <List
      dataSource={mobileMenuData}
      renderItem={item => (
        <List.Item>
          <Link to={item.url}>{item.title}</Link>
        </List.Item>
      )}
    />
  )

  return (
    <>
      <Header className={styles.header}>
        <Link to="/" className={styles.siteName}>
          {title}
        </Link>
        <Menu
          className={styles.menu}
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
          style={{ lineHeight: '4rem' }}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/blog/">
            <Link to="/blog/">Blog</Link>
          </Menu.Item>
          <Menu.Item key="/products/">
            <Link to="/products/">Products</Link>
          </Menu.Item>
          <Menu.Item key="/contact-us/">
            <Link to="/contact-us/">Contact Us</Link>
          </Menu.Item>
        </Menu>
        <div className={styles.mobileMenu}>
          <Popover
            placement="bottomRight"
            content={mobileMenuList}
            onClick={mobileMenuOnClick}
            trigger="click"
          >
            <Button type="primary" className={styles.mobileMenu__button}>
              <Icon type={menuCollapsed ? 'menu-unfold' : 'menu-fold'} /> Menu
            </Button>
          </Popover>
        </div>
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
