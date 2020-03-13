import copy from 'copy-webpack-plugin'
import path from 'path'

export default config => {
  config.resolve.alias['~'] = path.resolve(__dirname, 'src')
  config.plugins.push(new copy([{ context: `${__dirname}/public`, from: `*.*` }]))
}
