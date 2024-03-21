/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return {
      fallback: [
        {
          source: '/sub',
          destination: `${process.env.NEXT_PUBLIC_SUB_URL ?? ''}/sub`,
        },
        {
          source: '/sub/:path*',
          destination: `${process.env.NEXT_PUBLIC_SUB_URL ?? ''}/sub/:path*`,
        },
      ],
    }
  }
};

export default nextConfig;
