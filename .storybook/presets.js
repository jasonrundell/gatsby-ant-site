module.exports = [
  {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        modules: true,
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
