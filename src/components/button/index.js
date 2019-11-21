import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import styles from './button.module.scss'

/**
- Primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.
- For navigational function, see the **Link** atomic component. 
**/

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
    isBrandInverse && styles.brand__inverse,
    isLightInverse && styles.light__inverse,
    isDarkInverse && styles.dark__inverse
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

export default Button
