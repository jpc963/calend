/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sponsors.vuejs.org",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
}

export default nextConfig
