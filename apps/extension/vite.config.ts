import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest })
  ],
  resolve: {
    alias: {
      '@multi-wallet/core': path.resolve(__dirname, '../../packages/core/src'),
      '@multi-wallet/adapter-keplr': path.resolve(__dirname, '../../packages/adapter-keplr/src'),
      '@multi-wallet/adapter-lace': path.resolve(__dirname, '../../packages/adapter-lace/src'),
      '@multi-wallet/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: 'popup.html',
        background: 'background.js',
        content: 'content.js'
      }
    }
  }
});
