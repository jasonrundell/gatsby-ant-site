import React from 'react'
import renderer from 'react-test-renderer'

import PaginationList from '../pagination-list'

describe('PaginationList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaginationList path={'/path/'} pagesCount={2} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
