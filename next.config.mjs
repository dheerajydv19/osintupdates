/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'substack-post-media.s3.amazonaws.com',
          },
        ],
      },
};
export default nextConfig;