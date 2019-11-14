import React from "react"
import PropTypes from "prop-types"

import { classNames } from "../../utils/css"

import styles from "./icons.module.scss"

const Icon = ({ icon, isBrand, isDark, isLight }) => {
  const className = classNames(
    styles[icon],
    isBrand && styles.brand,
    isDark && styles.dark,
    isLight && styles.light
  )
  return (
    <span className={className}>
      <span>{icon}</span>
    </span>
  )
}

Icon.defaultProps = {
  isBrand: false,
  isDark: false,
  isLight: false,
}

Icon.propTypes = {
  icon: PropTypes.oneOf(["checkmark", "dot", "tooltip"]).isRequired,
}

export default Icon
