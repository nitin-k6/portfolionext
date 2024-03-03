/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: "custom", // for deployment   this is to load images from external source (in this case we have pexels). Also we  to make loader.js file 
      loaderFile: "./loader.js", // for deployment
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };
  
  export default nextConfig;