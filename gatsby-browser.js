/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import AppContainer from './src/components/AppContainer'

export const wrapRootElement = ({ element }) => (
  <AppContainer>{element}</AppContainer>
)
