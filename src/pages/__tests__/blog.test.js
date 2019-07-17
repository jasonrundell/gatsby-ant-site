import React from 'react'
import renderer from 'react-test-renderer'

import Blog from '../blog'

describe('Blog', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Blog',
        },
      },
    }

    const tree = renderer.create(<Blog data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
