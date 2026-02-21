import { withNuxt } from '@nuxt/eslint-config/flat'

// ESLint configuration for deeper checks after Oxlint
// Oxlint handles fast linting, ESLint handles complex rules
export default withNuxt(
  {
    features: {
      stylistic: false, // Disable stylistic rules - Oxfmt handles formatting
    },
  },
  {
    rules: {
      // Add any custom rules here that Oxlint doesn't cover
    },
  },
)
