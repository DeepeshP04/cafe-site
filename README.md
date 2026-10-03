# Serein Café

A responsive, single-page café website built with React and Vite. It presents the café's story, menu, gallery, customer reviews, location, hours, and contact options.

## Getting Started

Install a current version of Node.js and npm, then install the project dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Vite prints the local URL in the terminal. Open it in a browser to view the site.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |
| `npm run lint` | Run Oxlint on the project. |

## Project Structure

```text
src/
	components/   Page sections and their component styles
	App.jsx       Single-page layout and section order
	main.jsx      React application entry point
	index.css     Global styles and design tokens
public/         Static public assets
```

The page is assembled from reusable sections in `src/components/`, including the hero, about, menu, gallery, reviews, contact, and footer.

## Customization

Update the section components and their CSS files in `src/components/`. The café's menu, address, hours, phone number, and email are currently defined directly in those components; replace these details with the correct business information before publishing. The site also uses externally hosted Unsplash imagery and a Google Maps embed, which require an internet connection.
