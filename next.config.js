const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }]
  },
  devIndicators: { autoPrerender: false },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
}
