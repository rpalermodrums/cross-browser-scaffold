import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
];

export default defineConfig(() => ({
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
      resolveExtensions: extensions,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
          'react-hook-form': ['react-hook-form'],
          'react-native-web': ['react-native-web'],
          'react-native-paper': ['react-native-paper'],
          'react-router-dom': ['react-router-dom'],
          'react-router': ['react-router'],
          zod: ['zod'],
        },
      },
    },
  },
  sourcemap: true,
  logLevel: 'info',
  mode: 'production',
  plugins: [react()],
}));
