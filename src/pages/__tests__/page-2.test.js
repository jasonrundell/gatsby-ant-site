import React from 'react'
import renderer from 'react-test-renderer'

import SecondPage from '../page-2'

describe('SecondPage', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: "SecondPage",
        },
      },
    }

    const tree = renderer.create(<SecondPage data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})