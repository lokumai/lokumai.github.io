# 🍬 LokumAI Website

[![Deploy Astro site to GitHub Pages](https://github.com/lokumai/lokumai.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/lokumai/lokumai.github.io/actions/workflows/deploy.yml)

The official website for LokumAI organization - making AI as sweet and accessible as Turkish Delight.

🌐 **Live Site:** [https://lokumai.github.io](https://lokumai.github.io)

## 🚀 Technology Stack

- **Framework:** [Astro](https://astro.build/) - Fast, modern static site generator
- **Styling:** [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment:** GitHub Pages with GitHub Actions
- **Languages:** TypeScript, JavaScript, HTML

## 🏗️ Project Structure

```
lokumai.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── favicon.svg            # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigation header
│   │   └── Footer.astro       # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro   # Base page layout
│   └── pages/
│       ├── index.astro        # Home page (🍬 Artificial Delight 🧠)
│       ├── about.astro        # Our Story (Turkish Delight philosophy)
│       ├── focus-areas.astro  # AI Technologies & Focus Areas
│       ├── projects.astro     # Featured Projects
│       └── community.astro    # Join Us / Contribution Guidelines
├── package.json
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # TailwindCSS configuration
└── README.md
```

## 🎨 Design Philosophy

The website embodies the LokumAI philosophy through:

- **Turkish Delight Color Palette:** Soft pastels inspired by lokum (rose pink, pistachio green, sugar white, lavender)
- **Three Stacked Cubes Logo:** Representing diverse perspectives uniting to create solutions
- **Responsive Design:** Mobile-first approach with smooth animations
- **Accessibility:** Clear typography, good contrast, semantic HTML

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/lokumai/lokumai.github.io.git
cd lokumai.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build locally
npm run astro       # Run Astro CLI commands
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions.

### Manual Deployment

```bash
# Build the site
npm run build

# The built site will be in the `dist/` folder
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🌟 Star the repository** to show your support
2. **🐛 Report issues** if you find bugs or have suggestions
3. **🛠️ Submit pull requests** with improvements
4. **📖 Improve documentation** by fixing typos or adding examples

### Development Guidelines

- Follow the existing code style and structure
- Write clear commit messages in English
- Test your changes locally before submitting
- Update documentation if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **🏠 Website:** [https://lokumai.github.io](https://lokumai.github.io)
- **🐙 GitHub Organization:** [https://github.com/lokumai](https://github.com/lokumai)
- **🤗 Hugging Face:** [https://huggingface.co/lokumai](https://huggingface.co/lokumai)
- **💼 LinkedIn:** [https://www.linkedin.com/company/lokumai](https://www.linkedin.com/company/lokumai)

---

<p align="center">
  <i>Made with 🍬 and ❤️ in Istanbul</i><br>
  <strong>LokumAI © 2024-2025 - Artificial Delight for Everyone</strong>
</p>