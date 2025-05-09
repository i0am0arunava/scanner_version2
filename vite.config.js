import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true // For making sure that the PWA is testable from the Local dev environment
      },
      registerType: 'autoUpdate',
      manifest: {
        name: "UemEv-Scanner",
        short_name: "Event Scanner",
        icons: [
        
          {
            "src": "/icon.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "any maskable" // Icon format that ensures that your PWA icon looks great on all Android devices
          }
        ],
        theme_color: '#4D4D4D',
      },
    }),
  ],
});