import React from 'react'
import renderer from 'react-test-renderer'

import ImageFluid from '../image-fluid'

describe('ImageFluid', () => {
  it('renders correctly', () => {
    const data = {
      childImageSharp: {
        fluid: {
          base64: '',
          aspectRatio: 1,
          src: '',
          srcSet: '',
          sizes: '',
        },
      },
    }
    const tree = renderer.create(<ImageFluid image={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
