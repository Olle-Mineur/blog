import million from "million/compiler";


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                port: '',
                pathname: '/icons/**',
            },
        ],
    },
}

const millionConfig = {
    auto: true,// if you're using RSC: auto: { rsc: true },
  };

export default million.next(nextConfig, millionConfig);