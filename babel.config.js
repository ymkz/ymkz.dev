module.exports = function(api) {
  api.cache(true)

  const presets = [
    ['next/babel', { 'preset-env': { useBuiltIns: 'usage' } }],
    ['@emotion/babel-preset-css-prop'],
    ['@zeit/next-typescript/babel']
  ]

  return { presets }
}
