import React from 'react'
import renderer from 'react-test-renderer'

import Page404 from '../404'

describe('Page404', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Page404',
        },
      },
    }

    const tree = renderer.create(<Page404 data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
