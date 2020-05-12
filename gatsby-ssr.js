/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import AppContainer from './src/components/AppContainer'

export const wrapRootElement = ({ element }) => (
  <AppContainer>{element}</AppContainer>
)
