import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import styles from './layout.module.scss'

const Layout = ({ title, children }) => (
  <>
    <Header siteTitle={title} />
    <div className={styles.container}>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
    </div>
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout