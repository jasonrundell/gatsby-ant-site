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
  /**
    Use the loading state to indicate that the data Avatar needs is still loading.
    */
  children: PropTypes.any.isRequired,
}

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export default Button
