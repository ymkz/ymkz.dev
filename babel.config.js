module.exports = api => {
  api.cache(true)
  return {
    presets: [['preact-cli/babel']],
    plugins: [['module-resolver', { alias: { '~': './src' }, extensions: ['.ts', '.tsx'] }]],
  }
}
