/** @type {import('next').NextConfig} */



const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'i5.walmartimages.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.pexels.com',

              
            },
          ],
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i5.walmartimages.com',
              
            },
          ],
      },
};


export default nextConfig;
