/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const isProd = process.env.NODE_ENV === 'production'

// module.exports = nextConfig
module.exports = {
  assetPrefix: isProd ? '/susuwatarii.github.io/' : ''
}