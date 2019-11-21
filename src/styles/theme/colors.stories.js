import React from 'react'

import variables from '!!sass-variable-parser!./_colors.scss'

console.log(variables)

export default {
  title: 'Design Tokens | Colors',

  parameters: {
    componentSubtitle: 'Theme colors',
  },
}

export const ColorPalette = () => (
  <div>
    {Object.keys(variables).map((key, index) => {
      return (
        <div key={index}>
          <h3>{key}</h3>
          <p style={{ color: variables[key] }}>Example text.</p>
          <div style={{ backgroundColor: variables[key], padding: '1rem' }}>
            Example background.
          </div>
          <p>
            Hex: <code>{variables[key]}</code>
          </p>
          <p>
            SASS Variable: <code>${key}</code>
          </p>
        </div>
      )
    })}
  </div>
)
