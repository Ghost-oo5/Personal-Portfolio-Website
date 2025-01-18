import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdul Basit Portfolio",
    short_name: "AB Portfolio",
    description: "A portfolio Progressive Web App built by Abdul Basit",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/Logo-v1-black.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/Logo-v1-black.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/Logo-v1-white.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/Logo-v1-white.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/Logo-v1-white.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/Logo-v1-white.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/Logo-v1-white.png",
        sizes: "1080x1920",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  };
}
