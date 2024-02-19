/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    port: 3000,
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    // enable in-source testing to bring a closer feedback loop for development
    // @see https://vitest.dev/guide/in-source.html
    includeSource: ['src/**/*.{ts,tsx}'],
  },
});
