# Contributing to Thejands (company website)

Thank you for helping maintain the Thejands marketing site and admin tools. This repo is maintained by the Thejands team.

## Before you start

- Read [DESIGN.md](./DESIGN.md) for typography, color, and copy rules (no em dashes in user-facing text).
- Use [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) when changing production env, DNS, or third-party integrations.
- Node **22.12+** is required (`nvm use 22` or `fnm use 22`).

## Development setup

```bash
npm install
cp .env.example .env
npm run dev
```

Run checks before opening a PR:

```bash
npm run fix
npm run typecheck
npm run build
```

Husky runs lint on commit and `npm run build` on push (with Node version check).

## Branching and commits

- Branch from `main` or the active feature branch: `feature/short-description`, `fix/issue-description`.
- Write clear commit messages in English.
- Keep PRs focused; link related issues when applicable.

## Pull requests

1. Describe what changed and why.
2. Note any new env vars in `.env.example` and LAUNCH_CHECKLIST if relevant.
3. Confirm you tested locally (`npm run dev` or `npm run preview` after build).
4. Screenshots help for UI changes.

## What not to commit

- `.env`, credentials, or service account JSON
- Build output (`dist/`, `.vercel/`)
- Unrelated refactors in the same PR

## Reporting issues

Use GitHub Issues in [Thejands/company-website](https://github.com/Thejands/company-website) with steps to reproduce, expected vs actual behavior, and your Node version.

---

Questions about brand or copy: align with [DESIGN.md](./DESIGN.md) and existing page tone on thejands.in.
