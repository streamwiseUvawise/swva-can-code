# SWVA Can Code Website

Website for Southwest Virginia Can Code and related showcase/sponsorship content.

## Quick Start

- Install dependencies: `npm i`
- Start local dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Project Docs

- Full project documentation: [PROJECT-DOCUMENTATION.md](PROJECT-DOCUMENTATION.md)
- Non-technical editing guide: [src/EDITING-GUIDE.md](src/EDITING-GUIDE.md)

## Stack

- Vite
- React + TypeScript
- React Router
- Tailwind CSS

## Content-Driven Editing

Most website text and repeated cards/lists are managed in `src/data/*.ts` files.

For sponsorship updates:
- Sponsor logos list: `src/data/sponsorContent.ts` → `sponsors.items`
- Sponsorship packet filename: `src/data/sponsorContent.ts` → `packet.pdfFileName`
- Sponsor logo and packet assets folder: `src/assets/sponsor logo/`


## Push to main
 git add .
 git commit -m "log message"
 git push origin main
