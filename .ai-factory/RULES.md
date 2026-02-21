# Project Rules

> Short, actionable rules and conventions for this project. Loaded automatically by /aif-implement.

## Rules

- Use conventional commits for all commit messages (feat:, fix:, chore:, docs:, etc.)
- Use Oxlint before ESLint (fast linting first, then ESLint for deeper checks)
- Use Oxfmt instead of Prettier for code formatting
- Never add signatures (Co-Authored-By) to commit messages
- Use atomic commits - one logical change per commit, commit after each task
- Never work directly on main - always create a feature branch, merge to main via pull request after completion
