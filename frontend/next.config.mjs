/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            // pathname: '/photo-**',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            // pathname: '/photo-**',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            // pathname: '/photo-**',
          },
          
        ],
      },
};

export default nextConfig;
