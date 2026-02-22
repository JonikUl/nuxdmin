import withNuxt from './.nuxt/eslint.config.mjs';
import oxlint from 'eslint-plugin-oxlint';

// ESLint configuration for deeper checks after Oxlint
// Oxlint handles fast linting, ESLint handles complex rules
export default withNuxt({
  plugins: {
    ...oxlint.configs['flat/recommended'],
  },
  rules: {},
});
