/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { configDefaults } from 'vitest/config';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteImageOptimizer(), react(), basicSsl()],
  resolve: {
    alias: {
      three: path.resolve('./node_modules/three/build/three.module.js')
    }
  },
  server: {
    host: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.ts'],
    deps: {
      optimizer: {
        web: {
          include: ['vitest-canvas-mock']
        }
      }
    },
    threads: false,
    environmentOptions: {
      jsdom: {
        resources: 'usable'
      }
    },
    exclude: [...configDefaults.exclude, './src/e2e']
  }
});
