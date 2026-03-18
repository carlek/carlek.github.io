# TriVar Inc. — Website Redesign

Modern static website for **TriVar Inc.**, a Brampton, Ontario manufacturer of solid state power electronic control technology.

## Project Structure

```
trivar-website/
├── index.html                        # Homepage
├── pages/
│   ├── products.html                 # Product directory
│   ├── electronic-ballasts.html      # Product: Electronic Ballasts
│   ├── power-supplies.html           # Product: Power Supplies & Inverters
│   ├── ground-fault.html             # Product: Ground Fault Interrupter Modules
│   ├── motor-controls.html           # Product: Motor Speed Controls
│   ├── touch-controls.html           # Product: Touch Controls
│   ├── concert-light.html            # Product: Concert Light
│   ├── about.html                    # About TriVar
│   └── contact.html                  # Contact & Quote Request
├── css/
│   ├── main.css                      # Global styles, variables, typography
│   ├── components.css                # Reusable UI components
│   └── responsive.css                # Breakpoints & mobile layout
├── js/
│   ├── nav.js                        # Mobile nav toggle, scroll behaviour
│   └── form.js                       # Contact form validation
├── images/
│   └── (product images, logo etc.)
├── .gitignore
└── README.md
```

## Tech Stack

- **Pure HTML5 / CSS3 / Vanilla JS** — no build tool or framework required
- **CSS Custom Properties** for theming
- **CSS Grid + Flexbox** for layout
- **Mobile-first responsive** breakpoints
- **Web fonts** via Google Fonts (no tracking, self-hostable)

## Getting Started

No build step needed. Open `index.html` directly in a browser, or serve with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

## Deployment

This is a pure static site. It can be deployed to:

- **GitHub Pages** — push to `main`, enable Pages in repo settings, point to `/root`
- **Netlify** — drag and drop the folder or connect the repo
- **Any web host** — upload files via FTP/SFTP

## SEO Checklist

- [ ] Add real product images to `/images/`
- [ ] Fill in meta descriptions on each page
- [ ] Register with Google Search Console after going live
- [ ] Submit `sitemap.xml` (template provided in `/sitemap.xml`)
- [ ] Ensure domain has valid SSL certificate (HTTPS)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-change`
2. Commit with clear messages
3. Open a pull request against `main`
