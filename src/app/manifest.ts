import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'At last, I did it',
    short_name: 'Ghost',
    description: 'A Progressive Web App built by Ghost',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ffffff',
    "icons": [
      {
        "src": "/Logo-v1-white.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/Logo-v1-white.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/Logo-v1-white.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/Logo-v1-white.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/Logo-v1-white.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    screenshots: [
      {
        src: '/Logo-v1-white.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide', 
      },
      {
        src: '/Logo-v1-white.png', 
        sizes: '1080x1920',
        type: 'image/png',
        form_factor: 'narrow', 
      },
    ],
  }
}