module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)

  const presets = [
    ['next/babel', { 'preset-env': { useBuiltIns: 'usage' } }],
    ['@zeit/next-typescript/babel']
  ]

  const plugins = [['emotion']]

  return { presets, plugins }
}
