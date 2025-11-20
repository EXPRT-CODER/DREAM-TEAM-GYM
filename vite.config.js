import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "icons/icon_32x32.png",
        "icons/icon_48x48.png",
        "icons/icon_64x64.png",
        "icons/icon_72x72.png",
        "icons/icon_96x96.png",
        "icons/icon_128x128.png",
        "icons/icon_144x144.png",
        "icons/icon_192x192.png",
        "icons/icon_512x512.png",
      ],

      manifest: {
        name: "SVG_GYM App",
        short_name: "SVG_GYM",
        description: "A modern gym tracking progressive web app.",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
