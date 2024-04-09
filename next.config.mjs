/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // 308 redirect (permanent)
      },
      {
        source: '/post',
        destination: '/posts',
        permanent: false, // 307 redirect (temporary)
      },
    ];
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      port: '',
    
    },]

    // domains:["avatars.githubusercontent.com"]
    
  }
};



export default nextConfig;
