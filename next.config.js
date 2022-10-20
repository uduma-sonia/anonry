// const withPWA = require("next-pwa");

// /** @type {import('next').NextConfig} */

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   reactStrictMode: true,
// images: {
//   domains: ["robohash.org"],
// },
// });

const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["robohash.org"],
  },
  pwa: {
    dest: "public",
    register: false,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig);
