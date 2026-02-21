# Architecture: Modular Monolith

## Overview
The Nuxt Admin Template uses a **Modular Monolith** architecture. This pattern organizes code into self-contained modules with clear boundaries, all within a single deployment unit. Each feature module (auth, dashboard, users, etc.) is independent and can be enabled/disabled per project without affecting other modules.

This architecture is ideal for a reusable template because:
- **Template-First Design:** Modules can be selectively included when forking to new projects
- **Simple Deployment:** Single codebase, no microservice complexity
- **Future-Ready:** Modules with clear boundaries can be extracted to microservices later if needed
- **Fast Iteration:** Start with everything in one place, refactor when patterns emerge

## Decision Rationale
- **Project type:** Reusable admin dashboard template
- **Tech stack:** Nuxt 4 (full-stack), TypeScript, Nuxt UI
- **Key factor:** Adaptability — the template must be easily modified for different projects

## Folder Structure

```
nuxt-admin-template/
├── app/
│   ├── modules/                    # Feature modules (core architecture)
│   │   ├── auth/                   # Authentication & authorization
│   │   │   ├── components/         # Auth-specific components
│   │   │   ├── composables/        # Auth logic
│   │   │   ├── pages/              # Login, register pages
│   │   │   ├── server/             # Auth API routes
│   │   │   │   └── api/
│   │   │   ├── types/              # Auth types
│   │   │   └── index.ts            # Public API export
│   │   ├── dashboard/              # Dashboard module
│   │   │   ├── components/         # Dashboard widgets
│   │   │   ├── composables/        # Dashboard data fetching
│   │   │   ├── pages/              # Dashboard pages
│   │   │   ├── server/             # Dashboard API routes
│   │   │   └── index.ts
│   │   ├── users/                  # User management
│   │   ├── settings/               # Settings module
│   │   └── shared/                 # Cross-module utilities
│   │       ├── components/         # Shared UI components
│   │       ├── composables/        # Shared composables
│   │       ├── types/              # Shared types
│   │       └── utils/              # Shared utilities
│   ├── layouts/                    # Layout components
│   ├── plugins/                    # Nuxt plugins
│   └── middleware/                 # Route middleware
├── server/                         # Global server routes (Nitro)
│   ├── middleware/                 # Global server middleware
│   └── utils/                      # Server utilities
├── types/                          # Global TypeScript definitions
├── nuxt.config.ts                  # Nuxt configuration
└── app.vue                         # Root component
```

**Nuxt-Specific Conventions:**
- `app/modules/*/pages/` → Auto-routed via Nuxt file-based routing
- `app/modules/*/server/api/` → Merged into Nitro server routes
- `app/modules/*/composables/` → Auto-imported by Nuxt
- `app/modules/*/components/` → Auto-imported by Nuxt

## Dependency Rules

**Module Communication Rules:**
- ✅ Module A can use Module B's public API (via `index.ts` export)
- ✅ All modules can use `modules/shared/`
- ❌ Module A MUST NOT import internal files from Module B (no `../other-module/components/XYZ.vue`)
- ❌ No circular dependencies between modules

**Layer Rules (within each module):**
```
pages/ (UI)
  ↓
composables/ (logic)
  ↓
server/api/ (data access)
```

## Layer/Module Communication

### 1. Module Public API (index.ts)
Each module exports only what it wants to share:

```typescript
// app/modules/auth/index.ts
export { useAuth } from './composables/useAuth'
export { default as LoginForm } from './components/LoginForm.vue'
export type { User, LoginCredentials } from './types'

// Internal - NOT exported
// ./components/ResetPasswordForm.vue
// ./composables/useSessionRefresh.ts
```

### 2. Cross-Module Communication
Use composables for cross-module logic:

```typescript
// app/modules/dashboard/composables/useDashboard.ts
import { useAuth } from '../auth' // Use auth module's public API

export function useDashboard() {
  const { user, hasPermission } = useAuth()
  // ...
}
```

### 3. Server-to-Server Communication
Between modules, use `$fetch` to call API routes:

```typescript
// server/api/dashboard/stats.get.ts
import { useAuth } from '#auth'

export default defineEventHandler(async (event) => {
  const { user } = await useAuth(event)
  // Fetch data from other modules via API
  const users = await $fetch('/api/users/count')
  // ...
})
```

## Key Principles

1. **Module Independence:** Each module should be understandable in isolation
2. **Explicit Public API:** Only export via `index.ts`, hide internals
3. **Nuxt Conventions:** Leverage auto-imports, file-based routing, composables
4. **Type Safety:** All cross-module communication typed via TypeScript
5. **Template Ready:** Modules can be removed without breaking the app

## Code Examples

### Module Structure Example

```typescript
// app/modules/auth/index.ts - Public API
export { useAuth } from './composables/useAuth'
export { default as LoginForm } from './components/LoginForm.vue'
export { default as ProtectedRoute } from './components/ProtectedRoute.vue'
export type { User, LoginCredentials, RegisterData } from './types'

// Internal - NOT accessible from other modules
// export { useSessionRefresh } from './composables/useSessionRefresh'
```

```vue
<!-- app/modules/auth/components/LoginForm.vue -->
<script setup lang="ts">
import type { LoginCredentials } from '~/modules/auth/types'

const props = defineProps<{
  redirectTo?: string
}>()

const emit = defineEmits<{
  success: [user: User]
}>()

// Internal composable - not exported
const { login, loading, error } = useAuthLogin()

async function handleSubmit(credentials: LoginCredentials) {
  const user = await login(credentials)
  emit('success', user)
}
</script>

<template>
  <UForm @submit="handleSubmit">
    <!-- Form fields -->
  </UForm>
</template>
```

```typescript
// app/modules/auth/composables/useAuth.ts - Public composable
import type { User } from '~/modules/auth/types'

export function useAuth() {
  const user = useState<User | null>('auth-user', () => null)
  const isAuthenticated = computed(() => !!user.value)

  return {
    user,
    isAuthenticated
  }
}

// Internal - module use only
function useAuthLogin() {
  // Implementation details
}
```

### Cross-Module Usage

```vue
<!-- app/modules/dashboard/pages/index.vue -->
<script setup lang="ts">
// Use auth module's public API
import { useAuth } from '~/modules/auth'

const { user, isAuthenticated } = useAuth()

// Internal dashboard composable
const { stats, loading } = useDashboardStats()
</script>

<template>
  <div v-if="isAuthenticated">
    <h1>Welcome, {{ user?.name }}</h1>
    <!-- Dashboard content -->
  </div>
</template>
```

### Server Route with Cross-Module Call

```typescript
// app/modules/dashboard/server/api/dashboard/stats.get.ts
import { useAuth } from '~/modules/auth/server' // Server-side auth

export default defineEventHandler(async (event) => {
  // Verify auth
  const { user } = await useAuth(event)

  // Call other module's API (via $fetch to respect module boundaries)
  const userCount = await $fetch('/api/users/count', {
    headers: getHeaders(event)
  })

  return {
    userCount,
    // Other stats
  }
})
```

## Anti-Patterns

- ❌ **Direct Internal Imports:** Never import `../other-module/components/XYZ.vue` — use the module's `index.ts`
- ❌ **Shared State Hell:** Avoid `useState` in `modules/shared/` — keep state in the module that owns it
- ❌ **God Modules:** Keep modules focused. If a module grows too large, split into sub-modules
- ❌ **Circular Dependencies:** Module A imports Module B, Module B imports Module A — refactor to shared
- ❌ **Bypassing API:** Don't import server handlers directly from client code — use `$fetch` or `useFetch`

## Module Template

When adding a new module, use this structure:

```
app/modules/[module-name]/
├── components/          # Module-specific Vue components
├── composables/         # Module logic (auto-imported)
├── pages/               # Module pages (auto-routed)
├── server/
│   └── api/            # Module API routes
├── types/              # Module TypeScript types
└── index.ts            # Public API export
```

## Enabling/Disabling Modules

To remove a module for a specific project:
1. Delete the module directory: `rm -rf app/modules/[module-name]`
2. Remove imports from other modules (TypeScript will show errors)
3. Update any navigation/routes that referenced the module

## Module Dependencies

Declare module dependencies in `index.ts`:

```typescript
// app/modules/dashboard/index.ts
/**
 * Dependencies:
 * - auth (for user authentication)
 * - settings (for dashboard preferences)
 */
```

This makes dependencies explicit and helps when refactoring.
