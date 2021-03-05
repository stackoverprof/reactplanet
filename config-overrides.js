const { override, addBabelPreset, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@core']: path.resolve(__dirname, './src/core'),
    ['@pages']: path.resolve(__dirname, './src/pages'),
    ['@styles']: path.resolve(__dirname, './src/styles')
  })
)