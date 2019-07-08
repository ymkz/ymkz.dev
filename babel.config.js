module.exports = function(api) {
  api.cache(true)

  const configs = {
    'preset-env': { corejs: 3, targets: { esmodules: true }, useBuiltIns: 'usage' }
  }

  const presets = [['next/babel', { ...configs }], ['@emotion/babel-preset-css-prop']]

  const plugins = [['module-resolver', { alias: { '~': '.' }, extensions: ['.js', '.ts', '.tsx'] }]]

  return { presets, plugins }
}
