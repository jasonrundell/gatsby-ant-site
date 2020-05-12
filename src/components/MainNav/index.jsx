import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Menu, List, Popover, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import SiteNavContext from '../../context/site-nav'

import styles from './MainNav.module.scss'

const MainNav = ({ pathname }) => {
  const { nav } = useContext(SiteNavContext)
  const [menuCollapsed, setMenuCollapsed] = useState(false)

  const mobileMenuOnClick = () => {
    if (menuCollapsed) {
      setMenuCollapsed(false)
    } else {
      setMenuCollapsed(true)
    }
  }

  const siteNavLinks = nav

  const mobileMenuList = (
    <List
      dataSource={siteNavLinks}
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
        {siteNavLinks.map((item) => (
          <Menu.Item key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        ))}
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
