# AGENTS.md

> Project map for AI agents. Keep this file up-to-date as the project evolves.

## Project Overview
Reusable admin dashboard template built with Nuxt 4, TypeScript, and Nuxt UI. Designed to be quickly adapted for various projects.

## Tech Stack
- **Language:** TypeScript
- **Framework:** Nuxt 4 (with Nitro server)
- **UI Library:** Nuxt UI (shadcn-vue based, Tailwind CSS)
- **State Management:** Pinia
- **Data Fetching:** $fetch / useFetch (Nuxt built-in)
- **Styling:** Tailwind CSS (via Nuxt UI)

## Project Structure

```
nuxt-admin-template/
├── .ai-factory/              # AI Factory context files
│   ├── DESCRIPTION.md        # Project specification
│   └── ARCHITECTURE.md       # Architecture guidelines
├── .claude/                  # Claude Code configuration
│   └── skills/               # Project-specific skills
├── app/                      # Nuxt app directory
│   ├── components/           # Vue components
│   ├── composables/          # Composable functions
│   ├── layouts/              # Layout components
│   ├── pages/                # File-based routing
│   ├── plugins/              # Nuxt plugins
│   └── middleware/           # Route middleware
├── server/                   # Nitro server routes
│   ├── api/                  # API endpoints
│   ├── middleware/           # Server middleware
│   └── routes/               # Server routes
├── types/                    # TypeScript definitions
├── nuxt.config.ts            # Nuxt configuration
├── package.json              # Dependencies
└── .mcp.json                 # MCP servers configuration
```

## Key Entry Points
| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Nuxt framework configuration |
| `app.vue` | Root component |
| `server/api/` | API route handlers |

## Documentation
| Document | Path | Description |
|----------|------|-------------|
| AGENTS.md | AGENTS.md | This file — project structure map |
| DESCRIPTION.md | .ai-factory/DESCRIPTION.md | Project specification and tech stack |
| ARCHITECTURE.md | .ai-factory/ARCHITECTURE.md | Architecture decisions and guidelines |

## AI Context Files
| File | Purpose |
|------|---------|
| AGENTS.md | This file — project structure map |
| .ai-factory/DESCRIPTION.md | Project specification and tech stack |
| .ai-factory/ARCHITECTURE.md | Architecture decisions and guidelines |

## Installed Skills
| Skill | Description |
|-------|-------------|
| antfu/skills@nuxt | Nuxt full-stack framework patterns |
| nuxt/ui@nuxt-ui | Nuxt UI component library patterns |
| antfu/skills@vue | Vue 3 Composition API patterns |
| vuejs-ai/skills@vue-debug-guides | Vue debugging and error handling |

## MCP Servers
| Server | Purpose |
|--------|---------|
| github | GitHub integration |
| filesystem | File system operations |
| postgres | PostgreSQL database (optional) |
| chromeDevtools | Browser DevTools for testing |
