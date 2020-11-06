const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  headers: () => [{ source: '/(.*)', headers: createSecureHeaders() }],
  images: { domains: ['images.microcms-assets.io'] },
  devIndicators: { autoPrerender: false },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
}
