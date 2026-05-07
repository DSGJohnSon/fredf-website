# FredF Portfolio

Portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS.

## Scripts

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Le site tourne en local sur [http://localhost:3000](http://localhost:3000).

## CI/CD

GitHub Actions verifie chaque pull request et chaque push sur `main` :

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

Le deploiement production est gere par Vercel. Le check `ci` peut etre rendu obligatoire dans GitHub et Vercel avant promotion en production.
