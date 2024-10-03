/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http', // Protocolo correcto
          hostname: 'localhost', // Asegúrate que es 'localhost'
          port: '1337', // Puerto especificado
          pathname: '/uploads/**', // Ruta ajustada
        },
      ],
    },
  }
  
  export default nextConfig;
  