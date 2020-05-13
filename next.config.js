module.exports = {
  devIndicators: { autoPrerender: false },
  poweredByHeader: false,
  reactStrictMode: true,
  target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    return config
  },
}
