import React from 'react'

import variables from '!!sass-variable-parser!./_typography.scss'

export default {
  title: 'Design Tokens | Typography',

  parameters: {
    componentSubtitle: 'Theme typography',
  },
}

console.log(variables)

export const Fonts = () => (
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
          <div>
            <code>
              ${key}: {variables[key]}
            </code>
            <p style={{ fontFamily: variables[key] }}>
              Example paragraph of{' '}
              <span style={{ textTransform: 'capitalize' }}>{key}</span>
            </p>
          </div>
        </div>
      )
    })}
  </div>
)
