import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import styles from './button.module.scss'

const Button = ({
  isBrand,
  isDark,
  isLight,
  isBrandInverse,
  isDarkInverse,
  isLightInverse,
  onClick,
  children,
}) => {
  const className = classNames(
    styles.root,
    isBrand && styles.brand,
    isDark && styles.dark,
    isLight && styles.light,
    isBrandInverse && styles.brandInverse,
    isDarkInverse && styles.darkInverse,
    isLightInverse && styles.lightInverse
  )
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  isBrand: false,
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Button
