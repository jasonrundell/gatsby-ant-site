import { Link } from "gatsby"
import React from "react"

import styles from "./breadcrumb.module.scss"

export default () => (
  <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
    <ol>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ol>
  </nav>
)
