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
    isLight && styles.light,
    isDark && styles.dark,
    isBrandInverse && styles.brandInverse,
    isLightInverse && styles.lightInverse,
    isDarkInverse && styles.darkInverse
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
    Throw in any child string or object
    */
  children: PropTypes.any.isRequired,
  /**
    Set button style to 'Brand'
    */
  isBrand: PropTypes.bool,
  /**
    Set button style to 'Light'
    */
  isLight: PropTypes.bool,
  /**
    Set button style to 'Dark'
    */
  isDark: PropTypes.bool,
  /**
    Set button style to 'Inverse Brand'
    */
  isBrandInverse: PropTypes.bool,
  /**
    Set button style to 'Light Inverse'
    */
  isLightInverse: PropTypes.bool,
  /**
    Set button style to 'Dark Inverse'
    */
  isDarkInverse: PropTypes.bool,
}

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export default Button
