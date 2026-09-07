# Monil Patel — Portfolio

A personal portfolio website built with the **Apple iOS / Cupertino design system** — clean typography, minimal layout, subtle glassmorphism, and smooth animations. Pure HTML, CSS, and vanilla JavaScript with zero dependencies.

![Portfolio Preview](https://img.shields.io/badge/Live-Portfolio-2997ff?style=for-the-badge)

---

## ✨ Features

- **Apple-Inspired Design** — Inter / SF Pro typography, thin borders, generous whitespace, frosted glass nav bar, dark/light theme toggle
- **Project Showcase** — 7 production projects with category filters (Full-Stack, AI, Android, IoT) and detail modal sheets
- **Activity Rings** — Animated SVG skill proficiency rings inspired by Apple Fitness
- **Interactive Terminal** — Developer CLI accessible via `Cmd+K` / `Ctrl+K` with commands like `whoami`, `projects`, `skills`, `sudo hire`
- **Dark / Light Mode** — Instant theme switching with localStorage persistence
- **Fully Responsive** — Optimized for mobile (375px), tablet (768px), and desktop (1440px+)
- **Zero Dependencies** — No frameworks, no build step, no npm — just static files

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5, Semantic Elements |
| Styling | Vanilla CSS3, CSS Custom Properties, `backdrop-filter` glassmorphism |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Hosting | GitHub Pages / Vercel / Netlify (any static host) |

## 📁 Project Structure

```
Portfolio/
├── index.html          # Single-page semantic HTML
├── css/
│   └── ios-theme.css   # Complete design system — tokens, components, responsive
├── js/
│   └── app.js          # All logic — data, rendering, terminal, theme, filters
└── README.md
```

## 🚀 Run Locally

No build step required. Serve the static files with any HTTP server:

```bash
# Python
python -m http.server 4173

# Node.js
npx serve .

# Then open http://localhost:4173
```

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Clean headline with availability status and CTA buttons |
| **Stats** | Key metrics — 7+ projects, 2× national finalist, 3 internships, 8.42 CGPA |
| **Projects** | Filterable project cards with tech chips and expandable detail sheets |
| **Skills** | Animated activity rings + categorized skill chips across 5 domains |
| **Experience** | Internship cards (Jain Launchpad, TribeMe, RTsense) |
| **Education** | B.Tech CSE at Jain University, Diploma ICT at Marwadi University |
| **Awards** | INCEPTRIX 2026, NavaNIEti 2026, CRCE 2025 hackathon honors |
| **Contact** | Direct links (email, phone, GitHub, LinkedIn) + contact form |
| **Terminal** | Interactive CLI — `Cmd+K` to open |

## 📝 License

© 2026 Monil Patel. All rights reserved.

---

**Built with care in Bengaluru, India.**
