import React from 'react'
import { action } from '@storybook/addon-actions'
//import { Button } from '@storybook/react/demo';
import Button from '../src/components/button'

export default {
  title: 'Buttons',
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
