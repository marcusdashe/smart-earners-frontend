/** @type {import('next').NextConfig} */


const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // enables the styled-components SWC transform
    styledComponents: true,
    eslint: {
      ignoreDuringBuilds: true
    }
  },
  
  async rewrites(){
    return [
      {
        source: "/:slug*",
           destination: "https://jellyfish-app-jmchk.ondigitalocean.app/:slug"
      }
    ]
  }
   
}


module.exports = nextConfig
