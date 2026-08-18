# SSVP India Website

A premium static React + Vite redesign for the Society of St. Vincent de Paul (SSVP) India, designed for GitHub Pages deployment.

## Technology stack

- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- JavaScript ES modules

## Project structure

- src/
  - assets/
  - components/
  - pages/
  - data/
  - hooks/
  - App.jsx
  - main.jsx
  - index.css
- public/
  - favicon.svg
  - apple-touch-icon.svg
- .github/workflows/deploy.yml

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

This project is configured for repo-based GitHub Pages deployment using the base path:

```js
base: '/ssvpindia/'
```

Repository URL:

https://s7arlen.github.io/ssvpindia/

The deployment workflow uses GitHub Actions and uploads the dist folder.

## How to update content

- Edit data files in src/data to update stories, councils, activities and events.
- Update sections by changing reusable components in src/components.
- Create additional pages in src/pages when needed.

## How to add images

Place optimized images in public/images and reference them using relative or imported paths that work under the project base URL.

## How to add stories

Add new objects to src/data/stories.js and render them in the relevant components.

## How to add events

Add new items to src/data/events.js.

## How to update council data

Edit src/data/councils.js to reflect region names and council lists.

## Deployment notes

- The app uses HashRouter to maintain GitHub Pages compatibility.
- The build output is the dist folder.
- GitHub Actions deploys the production site from the dist directory.
