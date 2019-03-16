module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)

  const presets = [
    ['next/babel', { 'preset-env': { targets: { esmodules: true }, useBuiltIns: 'usage' } }],
    ['@zeit/next-typescript/babel']
  ]

  const plugins = [['emotion'], ['optimize-react']]

  return { presets, plugins }
}
