import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../button'

export default {
  title: 'Atomic Components | Button',

  parameters: {
    component: Button,
    componentSubtitle:
      'Displays an image that represents a user or organization',
  },
}

export const brand = () => (
  <Button isBrand={true} onClick={action('brand clicked')}>
    Button
  </Button>
)

export const light = () => (
  <Button isLight={true} onClick={action('light clicked')}>
    Button
  </Button>
)

export const dark = () => (
  <Button isDark={true} onClick={action('dark clicked')}>
    Button
  </Button>
)

export const brandInverse = () => (
  <Button isBrandInverse={true} onClick={action('brand inverse clicked')}>
    Button
  </Button>
)

export const lightInverse = () => (
  <Button isLInverse={true} onClick={action('light inverse clicked')}>
    Button
  </Button>
)

export const darkInverse = () => (
  <Button isDarkInverse={true} onClick={action('dark inverse clicked')}>
    Button
  </Button>
)
