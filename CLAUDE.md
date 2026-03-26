# CLAUDE.md — MaPlume

## Project Overview

MaPlume is a French written-language learning platform (Duolingo-style) built with React + Vite. It offers short interactive exercises (QCM) covering homophones, conjugaison, accords, and orthographe, with instant correction, explanations, and gamification (points, levels, streaks).

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Routing**: react-router-dom v7 (BrowserRouter)
- **Styling**: Vanilla CSS with CSS custom properties (no preprocessor)
- **Persistence**: localStorage only (no backend)
- **Deployment**: GitHub Pages (base path `/Calendrier-/`)

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## Project Structure

```
src/
├── main.jsx                 # Entry point, wraps App in BrowserRouter
├── App.jsx                  # Root component: routes, state, streak logic
├── index.css                # Global styles, CSS variables, animations
├── components/
│   ├── Header.jsx/.css      # Top bar (points, streak) + bottom nav
│   ├── CategoryCard.jsx/.css    # Clickable category card
│   ├── ExerciseCard.jsx/.css    # QCM question + option buttons
│   ├── ProgressBar.jsx/.css     # Question progress bar + close button
│   ├── ResultFeedback.jsx/.css  # Slide-up correct/incorrect panel
│   └── StatsCard.jsx/.css       # Stat display tile for dashboard
├── pages/
│   ├── Home.jsx/.css        # Landing page (hero + CTA)
│   ├── Categories.jsx/.css  # Category grid + daily challenge
│   ├── Exercise.jsx/.css    # Exercise session (core game loop)
│   ├── Results.jsx/.css     # Post-session score + confetti
│   └── Dashboard.jsx/.css   # Progress stats + history
├── data/
│   ├── exercises.js         # 60 questions across 4 categories
│   └── levels.js            # 6 level definitions + helper functions
├── hooks/
│   └── useLocalStorage.js   # useState synced with localStorage
└── utils/
    ├── scoring.js           # Points calculation (10/correct, bonuses)
    └── exerciseEngine.js    # Shuffle, session creation, daily challenge
```

## Routes

| Path | Page | Header visible |
|------|------|----------------|
| `/` | Home (landing) | No |
| `/categories` | Category selection | Yes |
| `/exercise/:categoryId` | Exercise session | No |
| `/exercise/daily` | Daily challenge | No |
| `/results` | Session results | No |
| `/dashboard` | Progress stats | Yes |

## Key Architecture Decisions

### State Management
All state lives in `App.jsx` using `useLocalStorage` hook and is passed via props. Two keys:
- `maplume-stats`: points, streak, counters, dailyChallengeLastDate
- `maplume-history`: last 50 session results (date, category, score, points)

### Exercise Flow
1. `Exercise.jsx` reads `categoryId` from URL params
2. If `"daily"` → `getDailyChallenge()` (deterministic seed from date)
3. Otherwise → `createSession(questions, 10)` (random subset, shuffled options)
4. User answers → `ResultFeedback` slides up → "Continuer" → next question
5. On complete → `navigate('/results', { state: { score, total, points, ... } })`

### Scoring
- +10 per correct answer
- +5 bonus per first-try correct
- +20 bonus for perfect session (all correct on first try)

### Levels (from levels.js)
Débutant (0) → Apprenti (100) → Intermédiaire (300) → Avancé (600) → Expert (1000) → Maître (2000)

## CSS Conventions

- **BEM naming**: `.component-name__element--modifier`
- **CSS variables**: All colors, spacing, radii, shadows defined in `:root` in `index.css`
- **Color palette**: green (#58CC02), blue (#1CB0F6), red (#FF4B4B), orange (#FF9600), purple (#CE82FF)
- **Animations**: Defined as `@keyframes` in `index.css`, utility classes `.animate-fade-in`, `.animate-shake`, etc.
- **Mobile-first**: Max-width 600px containers, fixed top bar (50px) + bottom nav (60px)
- **3D buttons**: `box-shadow: 0 4px 0` for Duolingo-style raised buttons

## Component Conventions

- Functional components with hooks, default exports
- Each component has a co-located `.css` file
- Props destructured in function signature
- Callbacks prefixed with `on`: `onAnswer`, `onNext`
- Emoji icons used for categories and levels (no icon library)

## Data Format (exercises.js)

```js
{
  categoryId: {
    id, title, icon, color, description,
    questions: [{
      id, type: "qcm", question, options: string[],
      correct: number, // index of correct option
      explanation: string
    }]
  }
}
```

## Adding Exercises

Add questions to the appropriate category in `src/data/exercises.js`. Follow the existing QCM format. Use sequential IDs (e.g., `h16` for homophones question 16). Always include a clear `explanation` with the grammar rule.

## Build & Deploy

- `npm run build` outputs to `dist/`
- Vite base path is `/Calendrier-/` (for GitHub Pages)
- GitHub Actions workflow in `.github/workflows/deploy.yml` auto-deploys on push
- `gh-pages` branch contains built static files
