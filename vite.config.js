import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react';

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'Money Tracker',
    short_name: 'Money Tracker',
    description: 'Track your expenses!',
    icons: [
      {
        src: 'manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: '#23A036',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/home',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
