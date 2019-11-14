import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../button'

describe('Button', () => {
  it('default renders correctly', () => {
    const tree = renderer.create(<Button>Default button</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('brand renders correctly', () => {
    const tree = renderer
      .create(<Button isBrand={true}>Default button</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
