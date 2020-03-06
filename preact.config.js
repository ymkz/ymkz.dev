import copy from 'copy-webpack-plugin'

export default config => {
  config.plugins.push(new copy([{ context: `${__dirname}/public`, from: `*.*` }]))
}
