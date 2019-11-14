import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import styles from './section.module.scss'

const Section = ({ isLarge, isConstrained, children }) => {
  const className = classNames(
    styles.root,
    isLarge && styles.large,
    isConstrained && styles.constrained
  )
  return <section className={className}>{children}</section>
}

Section.defaultProps = {
  isLarge: false,
  isConstrained: false,
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Section
