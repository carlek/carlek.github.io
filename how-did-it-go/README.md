# How Did It Go?

A post-interview self-assessment tool that helps you objectively evaluate how your interview went. Answer eight questions across key signal categories and get a calibrated read on your performance!

## What It Does

After an interview, it's easy to overthink or misjudge how things went. This app walks you through eight diagnostic questions covering:

- **Engagement** -- How interviewers responded when you spoke
- **Chemistry** -- Overall conversational tone and energy
- **Future Signals** -- Whether they discussed next steps or used future tense
- **Your Answers** -- How well your key points landed
- **Their Questions** -- Depth and progression of interviewer questions
- **Your Questions** -- How they engaged with your questions
- **Fit Signals** -- Whether they indicated you were a strong match
- **Energy** -- How you felt when it ended

Each question has four options scored 1--4. Here are the first two:

![Questions screenshot](src/assets/questions.png)

After completing all eight, you receive:

- An overall assessment (Strong offer signal, Solid, Mixed, or Challenging)
- Actionable commentary on what to do next
- A per-category score breakdown with visual progress bars

![Result screenshot](src/assets/result.png)

## Tech Stack

- React 19 + Vite 8
- Single-component app (no routing, no backend)
- Inline styles, dark theme (slate palette)

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
npm run preview
```

## Deployment

The app is deployed to GitHub Pages at [carlek.github.io/how-did-it-go](https://carlek.github.io/how-did-it-go/).

A GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment automatically. On every push to `main`:

1. Installs dependencies and builds the React app with Vite
2. Assembles the full site, replacing the `how-did-it-go/` directory with the built `dist/` output
3. Deploys to GitHub Pages using the official `actions/deploy-pages` action

No manual build step is needed -- just push source changes and the workflow takes care of the rest.

**Note:** In the repo's **Settings > Pages**, the source must be set to **GitHub Actions** (not "Deploy from a branch").
