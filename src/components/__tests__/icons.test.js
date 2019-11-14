import React from 'react'
import renderer from 'react-test-renderer'

import Icon from '../icons'

describe('Icon', () => {
  it('checkmark renders correctly', () => {
    const tree = renderer.create(<Icon icon="checkmark" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('dot renders correctly', () => {
    const tree = renderer.create(<Icon icon="dot" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('tooltip renders correctly', () => {
    const tree = renderer.create(<Icon icon="tooltip" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
