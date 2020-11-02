const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  headers: () => [{ source: '/(.*)', headers: createSecureHeaders() }],
  devIndicators: { autoPrerender: false },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
}
