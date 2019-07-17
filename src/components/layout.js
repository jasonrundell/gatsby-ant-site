import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Breadcrumb from './breadcrumb'

import styles from './layout.module.scss'

const Layout = ({ title, children }) => (
  <>
    <Header siteTitle={title} />
    <div className={styles.container}>
      <Breadcrumb />
    </div>
    <div className={styles.container}>
      <main>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">
          Gatsby
        </a>
        .{` `}
        Calin says hello.
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
