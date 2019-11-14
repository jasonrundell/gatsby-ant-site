import React from "react"
import PropTypes from "prop-types"

import { classNames } from "../../utils/css"

import styles from "./button.module.scss"

const Button = ({
  isBrand,
  isDark,
  isLight,
  isBrandOutlined,
  isDarkOutlined,
  isLightOutlined,
  onClick,
  children,
}) => {
  const className = classNames(
    styles.root,
    isBrand && styles.brand,
    isDark && styles.dark,
    isLight && styles.light,
    isBrandOutlined && styles.brandOutlined,
    isDarkOutlined && styles.darkOutlined,
    isLightOutlined && styles.lightOutlined
  )
  return (
    <button onClick={onClick} className={className}>
      <span className={styles.text}>{children}</span>
    </button>
  )
}

Button.defaultProps = {
  isCentered: false,
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Button
