module.exports = api => {
  api.cache(true)
  return {
    presets: [
      ['next/babel'],
      ['@emotion/babel-preset-css-prop', { labelFormat: '[dirname]__[filename]__[local]' }]
    ],
    plugins: [['module-resolver', { alias: { '~': '.' }, extensions: ['.js', '.ts', '.tsx'] }]]
  }
}
