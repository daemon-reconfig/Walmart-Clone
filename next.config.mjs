/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.kindpng.com',
            
          },
        ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'links.papareact.com',
              
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
