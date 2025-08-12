# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.











My Instructions & Warnings for This Project.

Pages Required:

Home
About Us
Our Products
Our Services
Contact Us


Navbar and Footer must be a single reusable component — not coded separately on each page.

Should contain links to all pages listed above and hamburger toggle when in mobile view.

Include icons for each page and all other places necessary in the project.

Each Page will have a hero section.

The rest of the home content will be static (no backend).

All pages content will be a page, not a component.

There's a GIF file in the document i sent. It's used for page loader in the project. it will display for about 4s everytime youre visiting a new page.

CSS & Styling Rules
Styling Method

I prefer separate .css files for styling each component/page.


File Naming

All folder naming should be capital cased. each letter shold be in capital letter.

CSS files should match their component/page name for clarity.

Example: Navbar.jsx → Navbar.css

General Code Structure:

Pages and components must be organized properly (e.g., Navbar, Hero sections for each, and Footer in components/, pages in pages/).

Avoid duplication of code (e.g., Navbar and Footer is a single component imported where needed).