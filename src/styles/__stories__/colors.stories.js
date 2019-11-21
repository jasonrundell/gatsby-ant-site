import React from 'react'

import variables from '!!sass-variable-parser!../theme/_colors.scss'

export default {
  title: 'Design Tokens | Color',

  parameters: {
    componentSubtitle: 'Theme colors',
  },
}

export const ColorPalette = () => (
  <div
    style={{
      fontFamily:
        '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    {Object.keys(variables).map((key, index) => {
      return (
        <div key={index} style={{ padding: '1rem', margin: '1rem' }}>
          <h3 style={{ textTransform: 'capitalize' }}>{key}</h3>
          <div
            style={{
              backgroundColor: variables[key],
              width: '2rem',
              height: '2rem',
              border: '1px solid #000',
            }}
          ></div>
          <div>
            <code>
              ${key}: {variables[key]}
            </code>
          </div>
        </div>
      )
    })}
  </div>
)
