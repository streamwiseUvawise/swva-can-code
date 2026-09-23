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

For Showcase updates:
- Event photos: `src/assets/showcase/`
- Student project images and exported poster PDFs: `src/assets/student-projects/`
- Event photos appear only in the Showcase gallery.
- Student project uploads appear only in the Student Projects section.
- Student project cards and details: `src/data/showcaseContent.ts`

For winner updates:
- Winner photos: `src/assets/winners/<year>/`
- Use descriptive lowercase filenames such as `high-school-first-place.jpg`.
- Winner photos appear before student projects on the Showcase page.

## Push to Main

The production repository is `streamwiseUvawise/swva-can-code`. The workspace includes a `streamwise` remote for it.

```bash
git add .
git commit -m "Describe the change"
git push streamwise main
```

If the `streamwise` remote is missing, add it with:

```bash
git remote add streamwise https://github.com/streamwiseUvawise/swva-can-code.git
```

GitHub authentication must use an account with write access to `streamwiseUvawise/swva-can-code`.

## Stop the Codespace

Before leaving the Codespace, run:

```bash
gh codespace stop
```
