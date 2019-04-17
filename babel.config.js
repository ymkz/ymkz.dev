module.exports = function(api) {
  api.cache(true)

  const presets = [
    ['next/babel', { 'preset-env': { useBuiltIns: 'usage' } }],
    ['@emotion/babel-preset-css-prop'],
    ['@zeit/next-typescript/babel']
  ]

  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          components: './components',
          constants: './constants',
          static: './static'
        }
      }
    ]
  ]

  return { presets, plugins }
}
