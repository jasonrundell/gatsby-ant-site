module.exports = [
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        modules: {
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
      },
    },
  },
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
    },
  },
]
