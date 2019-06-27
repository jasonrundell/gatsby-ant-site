import React from 'react'
import renderer from 'react-test-renderer'

import SEO from '../seo'

describe('SEO', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
      <SEO 
        title="Seo title" 
        description="Seo description" 
        author="Seo author" 
        lang="en" 
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})