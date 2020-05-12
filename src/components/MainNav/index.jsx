import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Menu, List, Popover, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import SiteNavContext from '../../context/site-nav'

import styles from './MainNav.module.scss'

const MainNav = ({ pathname }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false)
  const { nav } = useContext(SiteNavContext)

  const mobileMenuOnClick = () => {
    if (menuCollapsed) {
      setMenuCollapsed(false)
    } else {
      setMenuCollapsed(true)
    }
  }
  const mobileMenuData = nav

  const mobileMenuList = (
    <List
      dataSource={mobileMenuData}
      renderItem={(item) => (
        <List.Item>
          <Link to={item.url}>{item.title}</Link>
        </List.Item>
      )}
    />
  )
  return (
    <>
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
          <Button type="primary">
            {menuCollapsed && <MenuUnfoldOutlined />}
            {!menuCollapsed && <MenuFoldOutlined />}
            Menu
          </Button>
        </Popover>
      </div>
    </>
  )
}

MainNav.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default MainNav
