import Domains from './config/domains.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // i18n: {
    //     locales: ['ru', 'en'],
    //     defaultLocale: 'ru',
    //     domains: Domains.exports,
    // },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/old-blog/:path*',
                destination: '/new-blog/:path*',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
