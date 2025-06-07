/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true, // Désactive l'optimisation des images pour le développement
  },
}

module.exports = nextConfig 