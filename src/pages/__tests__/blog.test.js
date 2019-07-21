import React from 'react'
import renderer from 'react-test-renderer'

import Blog from '../blog'

describe('Blog', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: '',
        },
      },
      allMarkdownRemark: {
        edges: [
          {
            node: {
              excerpt: '',
              id: '',
              frontmatter: {
                title: '',
                date: '',
                path: '',
                featuredImage: '',
                featuredImageAlt: '',
              },
            },
          },
        ],
      },
    }

    const tree = renderer.create(<Blog data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
