/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Design imagery is served locally from /public/assets — no remote loaders needed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
