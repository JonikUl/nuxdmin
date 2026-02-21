# Implementation Plan: Project Foundation

> Milestone 1: Nuxt 4 setup, Nuxt UI integration, TypeScript configuration, base folder structure

**Branch:** `feature/project-foundation`
**Created:** 2026-02-21
**Status:** In Progress

---

## Settings

| Option | Value |
|--------|-------|
| **Testing** | Yes - Vitest with component tests |
| **Logging** | Standard (INFO level) |
| **Documentation** | Yes - update docs after implementation |
| **Package Manager** | pnpm |

---

## Tasks

### Phase 1: Project Setup

- [x] **Task 1:** Initialize Nuxt 4 project with pnpm
  - Create `package.json` with dependencies (nuxt, @nuxt/ui, nuxt-auth-utils, pinia, typescript, vitest, oxlint, oxfmt, eslint)
  - Create `nuxt.config.ts` with Nuxt UI, Pinia, Tailwind CSS configuration
  - Create `tsconfig.json` for TypeScript
  - Create `app.vue` as root component
  - Create `.gitignore` and `.nuxtignore`
  - **Commit:** `Initial Nuxt 4 project setup with pnpm, Nuxt UI, and TypeScript`

- [x] **Task 2:** Create modular folder structure
  - Create `app/modules/` with auth, dashboard, users, settings, shared subdirectories
  - Each module has: components/, composables/, pages/, server/api/, types/, index.ts
  - Create `app/layouts/`, `app/plugins/`, `app/middleware/`
  - Create `server/middleware/`, `server/utils/`
  - Create `types/` directory
  - **Commit:** `Modular folder structure with auth, dashboard, users, settings, and shared modules`

### Phase 2: Shared Foundation

- [x] **Task 3:** Create shared types and utilities
  - **Blocked by:** Task 2
  - Create `app/modules/shared/types/index.ts` (ApiResponse, Pagination, SortOrder)
  - Create `app/modules/shared/types/forms.ts` (FormErrors, ValidationRule, FormState)
  - Create `app/modules/shared/utils/logger.ts` (createLogger with LOG_LEVEL)
  - Create `app/modules/shared/utils/format.ts` (formatDate, formatNumber, formatCurrency)
  - Create `app/modules/shared/utils/validation.ts` (validators)
  - Create `app/modules/shared/composables/useLoading.ts`
  - Create `app/modules/shared/composables/useNotification.ts`
  - Update `app/modules/shared/index.ts` with exports
  - **Commit:** `Shared types, utilities, logger, and composables`

- [x] **Task 4:** Configure testing infrastructure
  - **Blocked by:** Task 3
  - Create `vitest.config.ts` with @nuxt/test-utils
  - Create `test/setup.ts` for test initialization
  - Create sample tests in `test/unit/utils/format.test.ts`
  - Add test scripts to package.json
  - **Commit:** `Vitest testing infrastructure with unit and component test setup`

- [x] **Task 5:** Create root layout and app configuration
  - **Blocked by:** Task 2
  - Update `app.vue` with UApp wrapper from Nuxt UI
  - Create `app.config.ts` with UI theming (primary: violet, neutral: zinc)
  - Create `assets/css/main.css` with Tailwind and Nuxt UI imports
  - Add dark/light mode CSS variables
  - **Commit:** `Root layout with UApp wrapper and theming configuration`

- [x] **Task 6:** Configure Oxlint and Oxfmt
  - **Blocked by:** Task 1
  - Create `oxlint.json` with Nuxt/Vue configuration
  - Create `oxlint-meta.json` for IDE integration
  - Create `.oxlintignore`
  - Keep `eslint.config.mjs` for deeper checks (runs after oxlint)
  - Add lint and format scripts to package.json (lint:oxlint, lint, format)
  - **Commit:** `Oxlint and Oxfmt configuration for code quality`

### Phase 3: Finalize

- [x] **Task 7:** Create Git repository with initial commit
  - **Blocked by:** Tasks 1, 2, 3, 4, 5, 6
  - Update/create `.gitignore` with comprehensive patterns
  - Create `README.md` with project description, stack, getting started
  - Stage and commit all changes
  - Create git tag `v0.0.1-foundation`
  - Update `.ai-factory/ROADMAP.md` - mark "Project Foundation" as completed
  - **Commit:** `feat: initialize Nuxt 4 Admin Template with modular architecture`

---

## Commit Plan

| Checkpoint | Tasks | Commit Message |
|------------|-------|----------------|
| 1 | Task 1 | `Initial Nuxt 4 project setup with pnpm, Nuxt UI, and TypeScript` |
| 2 | Task 2 | `Modular folder structure with auth, dashboard, users, settings, and shared modules` |
| 3 | Tasks 3, 4, 5 | `Shared types, utilities, testing, and theming foundation` |
| 4 | Tasks 6, 7 | `Oxlint/Oxfmt configuration and initial project commit` |

---

## Task Files

| Task | File |
|------|------|
| 1 | package.json, nuxt.config.ts, tsconfig.json, app.vue, .gitignore, .nuxtignore |
| 2 | All module directories, index.ts files |
| 3 | shared/types/*, shared/utils/*, shared/composables/*, shared/index.ts |
| 4 | vitest.config.ts, test/setup.ts, test/unit/utils/format.test.ts |
| 5 | app.vue, app.config.ts, assets/css/main.css |
| 6 | oxlint.json, oxlint-meta.json, .oxlintignore, eslint.config.mjs |
| 7 | README.md, ROADMAP.md (update), .gitignore |

---

## Next Steps

To start implementation, run:
```
/aif-implement
```

To view tasks:
```
/tasks
```

To free context before implementing:
```
/clear
```
