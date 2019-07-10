import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../index'

describe('Index', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Default Starter Blog',
        },
      },
      file: {
        childImageSharp: {
          fluid: {
            base64: '',
            aspectRatio: 1,
            src: '',
            srcSet: '',
            sizes: '',
          },
        },
      },
    }

    const tree = renderer.create(<Index data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
