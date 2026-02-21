# Nuxt Admin Template

> Reusable admin dashboard template built with Nuxt 4, TypeScript, and Nuxt UI

A modular, full-stack admin template designed to be quickly adapted for various projects.

## Tech Stack

- **Framework:** Nuxt 4 with Nitro server
- **Language:** TypeScript
- **UI Library:** Nuxt UI (shadcn-vue based)
- **Styling:** Tailwind CSS
- **State Management:** Pinia
- **Authentication:** nuxt-auth-utils (OAuth, sessions)
- **Testing:** Vitest + @nuxt/test-utils
- **Linting:** Oxlint (fast) + ESLint (deep checks)
- **Formatting:** Oxfmt

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
nuxt-admin-template/
├── app/
│   └── modules/           # Feature modules (Modular Monolith)
│       ├── auth/          # Authentication & authorization
│       ├── dashboard/     # Dashboard module
│       ├── users/         # User management
│       ├── settings/      # Settings module
│       └── shared/        # Shared utilities
├── server/                # Nitro API routes
├── types/                 # TypeScript definitions
└── test/                  # Vitest tests
```

### Module Structure

Each module follows this pattern:

```
app/modules/[module-name]/
├── components/          # Vue components
├── composables/         # Composable functions
├── pages/               # Auto-routed pages
├── server/api/          # API routes
├── types/               # TypeScript types
└── index.ts             # Public API exports
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm lint:oxlint` | Run Oxlint (fast) |
| `pnpm lint` | Run Oxlint + ESLint |
| `pnpm format` | Format with Oxfmt |
| `pnpm test:unit` | Run unit tests |
| `pnpm test:coverage` | Run tests with coverage |

## Features

- **Modular Architecture** - Self-contained modules with clear boundaries
- **Type Safety** - Full TypeScript coverage
- **OAuth Authentication** - GitHub, Google providers via nuxt-auth-utils
- **Dark/Light Mode** - Built-in theming support
- **Responsive Design** - Mobile-first approach
- **Testing Ready** - Vitest configuration included

## Customization

This template is designed to be forked and adapted per project:

1. **Remove unused modules** - Delete module directories you don't need
2. **Add new modules** - Follow the module template structure
3. **Configure OAuth** - Set up nuxt-auth-utils with your providers
4. **Customize theme** - Modify `app.config.ts` for your brand colors

## Documentation

- [Architecture Guide](.ai-factory/ARCHITECTURE.md)
- [Project Roadmap](.ai-factory/ROADMAP.md)
- [AI Agents Map](AGENTS.md)

## License

MIT
