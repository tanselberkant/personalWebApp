/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['www.domain.com', "cdn.sanity.io"]
    }
}

module.exports = nextConfig
