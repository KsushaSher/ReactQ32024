import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: {}, include: '**/*.svg' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      include: ['src/**/*'],
      exclude: ['**/*/index.ts', 'src/pages', 'src/store/store.ts'],
      provider: 'v8',
    },
  },
});
