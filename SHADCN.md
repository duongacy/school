# shadcn-ui integration guide

This repo includes two helper npm scripts to make working with the shadcn-ui CLI easier:

- `npm run shadcn:init` — runs `npx shadcn-ui@latest init` to initialize the shadcn scaffolding interactively.
- `npm run shadcn:add` — runs `npx shadcn-ui@latest add <component>` to add components (e.g. `button`, `dialog`, `input`).

Recommended packages to install (optional, but commonly used):

```bash
# icons used by many shadcn examples
npm install lucide-react

# helpful for creating variants in components
npm install class-variance-authority
```

Quick workflow

1. Install the recommended packages (optional):

```bash
npm install lucide-react class-variance-authority
```

2. Initialize shadcn UI (interactive; will scaffold components and may suggest tailwind config changes):

```bash
npm run shadcn:init
```

3. Add components as needed. Example:

```bash
# interactive CLI will ask to place files under src/components or app/components
npm run shadcn:add -- button
npm run shadcn:add -- input
```

Notes & tips

- The CLI may modify your Tailwind config (e.g. add content paths or theme tokens). Review changes in git before committing.
- Generated components typically depend on the `lucide-react` icon package. If you don't want that dependency, remove the icons or replace them.
- After adding components, run a TypeScript check and start the dev server to validate:

```bash
npx tsc --noEmit
npm run dev
```

If you want, I can run the install + init steps for you now (I will run the CLI and validate with a quick typecheck). Reply with "go ahead" to let me run them, or run the commands above locally.
