module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)

  const presets = [
    ['next/babel', { 'preset-env': { targets: { esmodules: true }, useBuiltIns: 'usage' } }],
    ['@emotion/babel-preset-css-prop'],
    ['@zeit/next-typescript/babel']
  ]

  return { presets }
}
