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
        name: "DREAM GYM App",
        short_name: "DREAM GYM",
        description: "A modern gym tracking progressive web app.",
        lang: "en",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#000000",
        background_color: "#000000",

        icons: [
          {
            src: "/icons/icon_512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon_192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon_144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/icon_128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "/icons/icon_96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/icon_72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/icons/icon_64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "/icons/icon_48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/icon_32x32.png",
            sizes: "32x32",
            type: "image/png"
          }
        ],

        shortcuts: [
          {
            name: "Open workouts",
            short_name: "Workouts",
            description: "Jump straight to workouts",
            url: "/workouts",
            icons: [
              { src: "/icons/icon_192x192.png", sizes: "192x192" }
            ]
          },
          {
            name: "Log workout",
            short_name: "Log",
            description: "Quickly log a workout",
            url: "/log",
            icons: [
              { src: "/icons/icon_192x192.png", sizes: "192x192" }
            ]
          }
        ]
      }
    })
  ]
});
