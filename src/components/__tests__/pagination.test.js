import React from 'react'
import renderer from 'react-test-renderer'

import Pagination from '../pagination'

describe('Pagination', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Pagination />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
