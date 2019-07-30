module.exports = api => {
  api.cache(true)

  return {
    presets: [
      [
        'next/babel',
        { 'preset-env': { corejs: 3, targets: { esmodules: true }, useBuiltIns: 'usage' } }
      ],
      ['@emotion/babel-preset-css-prop', { labelFormat: '[dirname]__[filename]__[local]' }]
    ],
    plugins: [['module-resolver', { alias: { '~': '.' }, extensions: ['.js', '.ts', '.tsx'] }]]
  }
}
