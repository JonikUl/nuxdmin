# Project: Nuxt Admin Template

## Overview
A reusable admin dashboard template built with Nuxt 4, designed to be quickly adapted for various projects. The template provides a solid foundation with common admin features that can be easily extended based on project requirements.

## Core Features
- **Authentication & Authorization** - OAuth via nuxt-auth-utils (GitHub, Google, etc.), session management, role-based access control
- **Dashboard Layout** - Sidebar navigation, header, responsive design
- **Data Tables** - Sortable, filterable, paginated tables with Nuxt UI
- **Forms** - Form validation, error handling, file uploads
- **State Management** - Centralized state with Pinia
- **API Integration** - Nitro server routes for backend logic
- **Error Handling** - Global error handling and logging
- **Theming** - Dark/light mode support with Nuxt UI

## Tech Stack
- **Language:** TypeScript
- **Framework:** Nuxt 4 (with Nitro server)
- **UI Library:** Nuxt UI (shadcn-vue based)
- **State Management:** Pinia
- **Data Fetching:** $fetch / useFetch (Nuxt built-in)
- **Forms:** Nuxt UI + Form Validation (vee-validate or similar)
- **Authentication:** nuxt-auth-utils (OAuth, session management, GitHub/Google providers)
- **Database:** Via Nitro (flexible - can add Prisma, Drizzle, or direct connections)
- **Styling:** Tailwind CSS (via Nuxt UI)

## Architecture Notes
- **Full-stack Nuxt** - Frontend and API routes in one codebase
- **Nitro Server** - Server-side logic in `server/` directory
- **Composables** - Reusable logic in `composables/`
- **Components** - Vue components with Nuxt UI primitives
- **Middleware** - Route guards for authentication
- **Plugins** - Nuxt plugins for global functionality

## Design Principles
1. **Template-First** - Built to be forked and adapted per project
2. **Convention Over Configuration** - Follow Nuxt conventions
3. **Type Safety** - Full TypeScript coverage
4. **Modular** - Features can be enabled/disabled per project
5. **Documented** - Clear documentation for customization

## Architecture
See `.ai-factory/ARCHITECTURE.md` for detailed architecture guidelines.
Pattern: Modular Monolith

## Non-Functional Requirements
- **Logging:** Configurable via LOG_LEVEL, structured logging
- **Error Handling:** Global error handler with user-friendly messages
- **Security:** CSRF protection, XSS prevention, secure headers
- **Performance:** SSR/SSG support, lazy loading, optimized bundle
- **Accessibility:** WCAG AA compliance with Nuxt UI components
