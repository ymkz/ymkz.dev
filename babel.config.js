module.exports = function(api) {
  api.cache(true)

  const presets = [
    ['next/babel', { 'preset-env': { useBuiltIns: 'usage' } }],
    ['@emotion/babel-preset-css-prop', { labelFormat: '[dirname]-[filename]-[local]' }],
    ['@zeit/next-typescript/babel']
  ]

  const plugins = [['module-resolver', { alias: { '~': '.' }, extensions: ['.js', '.ts', '.tsx'] }]]

  return { presets, plugins }
}
