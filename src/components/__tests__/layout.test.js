import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../layout'

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout location="/blog/" title="Layout title">
          Layout test
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
