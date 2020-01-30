import React from 'react'
import renderer from 'react-test-renderer'

import SkipToMain from '../SkipToMain'

describe('SkipToMain', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SkipToMain />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
