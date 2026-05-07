# FredF Portfolio

Portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-2088FF?logo=githubactions&logoColor=white)

## Scripts

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Le site tourne en local sur [http://localhost:3000](http://localhost:3000).

## Projets

Les projets sont geres dans `public/data/projects.ts`.

Pour ajouter un projet :

1. Ajouter les images dans `public/images/projects/[slug]/`.
2. Ajouter une nouvelle entree dans le tableau `projects`.
3. Renseigner au minimum `slug`, `title`, `date`, `tags`, `thumbnail`, `shortDescription`, `promise` et `sections`.
4. Lancer `pnpm lint` puis `pnpm build` avant de pousser.

Pour modifier un projet existant, editer son entree dans `public/data/projects.ts`. Le `slug` sert aussi a generer l'URL `/projects/[slug]`, donc il faut eviter de le changer si la page est deja publiee.

## CI/CD

GitHub Actions verifie chaque pull request et chaque push sur `main` :

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

Le deploiement production est gere par Vercel. Le check `ci` peut etre rendu obligatoire dans GitHub et Vercel avant promotion en production.
