# Shelve the Potions! Guide

Standalone Next.js static-export guide site for *Shelve the Potions!* — walkthrough, puzzle solutions (clock / color / chess), spoiler-controlled content.

- Production: https://shelvethepotions.wiki (domain registered at Spaceship, DNS on Vercel-compatible records, deployed on Vercel)
- Stack: Next.js 15 static export, no client framework beyond React, minimal JS
- Checks: `npm run check` (tsc + next build) must pass before push; every push to `main` auto-deploys production via the Vercel GitHub integration
