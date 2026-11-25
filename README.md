# Hamrah_Project

A modern React 19 starter project built with **TypeScript** and **Vite**, featuring a responsive UI with dark mode support, a counter component, and documentation/social links sections.

## 🚀 Tech Stack

- [React 19](https://react.dev/) — UI library
- [React Router](https://reactrouter.com/) — Client-side routing (LTS v7)
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite](https://vite.dev/) — Build tool & dev server
- [oxlint](https://oxc-project.github.io/) — Fast linting
- CSS Variables — Theming (light/dark mode)

## 📦 Features

- ⚡️ Lightning-fast dev server with HMR via Vite
- 🎨 Dark mode support with CSS variables
- 📱 Responsive layout (mobile & desktop)
- 🔢 Interactive counter component
- 🔀 Client-side routing with React Router (LTS v7)
- 🧩 Hero section with React & Vite logos
- 📚 Documentation links section
- 🌐 Social links section (GitHub, Discord, X, Bluesky)
- ⚙️ StrictMode enabled for React best practices

## 📁 Project Structure

```
Hamrah_Project/
├── public/              # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/          # Images & SVGs
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx          # Root component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles & CSS variables
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json
├── tsconfig.node.json
├── .oxlintrc.json       # oxlint configuration
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Hamrah_Project
npm install
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint on the project |

### Development

Start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

Preview the production build:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎨 Customization

- Edit `src/App.tsx` to modify the UI and add your own components.
- Update `src/index.css` to change the theme colors (CSS variables in `:root`).
- Add images to `src/assets/` and reference them in your components.

## 📜 License

This project is private and licensed as specified in `package.json`.

---

Built with ⚡️ Vite, ⚛️ React 19, 🛣️ React Router, and TypeScript.