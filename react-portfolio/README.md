# React Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases projects, skills, and provides a contact form for potential opportunities.

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive UI** - Hover effects and transitions on project cards
- **Modern Tech Stack** - React 19, Vite 7, Tailwind CSS 4
- **Performance Optimized** - React Compiler enabled for enhanced performance

## 📋 Sections

| Section | Description |
|---------|-------------|
| **Home** | Hero section with welcome message and call-to-action |
| **About** | Personal bio and skill showcase (technical & soft skills) |
| **Projects** | Grid display of portfolio projects with live links |
| **Contact** | Contact form and social media links (GitHub, LinkedIn) |

## 🛠️ Tech Stack

### Core Dependencies
- **React** ^19.1.1 - UI library
- **React DOM** ^19.1.1 - DOM rendering
- **Tailwind CSS** ^4.1.14 - Utility-first CSS framework
- **@tailwindcss/vite** ^4.1.14 - Vite integration for Tailwind

### Development Dependencies
- **Vite** ^7.1.7 - Build tool and dev server
- **@vitejs/plugin-react** ^5.0.4 - React plugin for Vite
- **babel-plugin-react-compiler** ^19.1.0-rc.3 - React Compiler for optimizations
- **ESLint** ^9.36.0 - Code linting
- **@types/react** ^19.1.16 - React TypeScript types
- **@types/react-dom** ^19.1.9 - React DOM TypeScript types

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/taylin1/React-Portfolio.git

# Navigate to project directory
cd react-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot module replacement
npm run dev

# The app will be available at http://localhost:5173
```

### Build

```bash
# Create production build
npm run build

# Output will be in the `dist/` directory
```

### Preview

```bash
# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint to check for code issues
npm run lint
```

## 📁 Project Structure

```
react-portfolio/
├── index.html              # HTML entry point
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global app styles
│   ├── index.css          # Tailwind CSS imports
│   ├── assets/
│   │   ├── PortfolioWeb.png
│   │   ├── AboutMeWeb.jpg
│   │   └── ProjectPic.jpeg
│   └── components/
│       ├── NavBar.jsx     # Navigation bar component
│       ├── HeroPage.jsx   # Home/About section
│       ├── ProjectPage.jsx# Projects grid component
│       ├── ContactPage.jsx# Contact form component
│       └── Footer.jsx     # Footer component
└── dist/                  # Production build output
```

## 🎨 Components

### NavBar
Fixed navigation bar with links to all sections. Features:
- Responsive layout (mobile-friendly)
- Gradient accent on brand name
- Hover effects on navigation links

### HeroPage
Combines the hero section and about section:
- Eye-catching headline with gradient text
- Profile image display
- About Me bio section
- Skills showcase (HTML, TailwindCSS, React, JavaScript, Node.js/Express)
- Soft skills (Problem Solving, Time Management, Adaptable)

### ProjectPage
Displays projects in a responsive grid:
- 6 projects displayed with images and links
- Hover scale effect on project cards
- Direct links to live deployments on Netlify

### ContactPage
Contact form and social links:
- Name, Email, and Message fields
- GitHub and LinkedIn social icons
- Links open in new tabs

### Footer
Simple footer with copyright year (dynamic) and note about the site being front-end only.

## 🌐 Live Demo

The portfolio is deployed and can be viewed at: [https://eclectic-boba-20376a.netlify.app/](https://eclectic-boba-20376a.netlify.app/)

## 🔗 Connect

- **GitHub**: [taylin1/React-Portfolio](https://github.com/taylin1/React-Portfolio)
- **LinkedIn**: [Taylin Damonze](https://www.linkedin.com/in/taylin-damonze-298629234/)

## ⚙️ Configuration

### Vite Config
The `vite.config.js` includes:
- React plugin for JSX transformation
- Tailwind CSS plugin for utility classes

### ESLint Config
The `eslint.config.js` includes:
- Recommended ESLint rules
- React Hooks plugin
- React Refresh plugin for Vite

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

This is a personal portfolio project. Feel free to explore the code and use it as inspiration for your own portfolio!

## 📄 License

This project is private and intended for personal use.
