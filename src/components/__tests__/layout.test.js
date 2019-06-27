import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'

import Layout from '../layout'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Gatsby Starter Intl`,
        },
      },
    }),
  )
})

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Layout>Layout test</Layout>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})