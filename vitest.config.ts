import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['app/**/*.vue', 'app/**/*.ts', 'app/**/*.tsx'],
      exclude: ['node_modules/', 'test/', '*.config.*', '.nuxt/', 'dist/'],
    },
  },
});
