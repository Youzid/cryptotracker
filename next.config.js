/** @type {import('next').NextConfig} */


// const fs = require("fs-extra");

// module.exports = { async ProductsData() {
//   const response = await fetch("https://example.com/langs");
//   const dt = await response.json();
// }}



module.exports = {

  reactStrictMode: true,
  images: {
    domains: ["rb.gy" ,".png" ,"cdn.sanity.io","jpg","image/jpeg","jpeg" ,"image","_upload" ,"www.pngall.com" , "cdn.coinranking.com"]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}


