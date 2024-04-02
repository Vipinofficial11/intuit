/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        hostname: "eep.io",
        port: "",
      },
      { hostname: "techcrunch.com", port: "" },
    ],
  },
};

export default nextConfig;
