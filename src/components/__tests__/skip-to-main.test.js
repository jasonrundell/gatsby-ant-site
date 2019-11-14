import React from 'react'
import renderer from 'react-test-renderer'

import SkipToMain from '../skip-to-main'

describe('SkipToMain', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SkipToMain />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
