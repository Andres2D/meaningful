import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon-32x32.png', 'maskable_icon_x192.png'],
      manifest: {
        name: 'meaningful',
        short_name: 'meaningful',
        description: 'A dictionary, a background generator, a help with wordle all at the same place, it`s just meaningful',
        theme_color: '#373636',
        icons: [
          {
            src: 'maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
