# CLAUDE.md — MaPlume

## Project Overview

MaPlume is a French written-language learning platform (Duolingo-style) built with React + Vite. Users learn grammar rules through interactive lessons, then practice with QCM and fill-in-the-blank exercises. The app features instant correction with explanations, gamification (points, levels, streaks, badges), and a daily challenge.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Routing**: react-router-dom v7 (HashRouter for GitHub Pages compatibility)
- **Styling**: Vanilla CSS with CSS custom properties (no preprocessor, no CSS-in-JS)
- **Persistence**: localStorage only (no backend, no API)
- **Deployment**: GitHub Pages via `gh-pages` branch (base path `/Calendrier-/`)
- **Font**: Nunito (Google Fonts)

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
├── main.jsx                          # Entry point, wraps App in HashRouter
├── App.jsx                           # Root: routes, state, streak/badge/level logic
├── index.css                         # Global styles, CSS variables, animations
├── components/
│   ├── Header.jsx/.css               # Top bar (points, streak) + bottom nav
│   ├── CategoryCard.jsx/.css         # Clickable category card
│   ├── ExerciseCard.jsx/.css         # QCM question + option buttons
│   ├── FillExerciseCard.jsx/.css     # Fill-in-the-blank input exercise
│   ├── ProgressBar.jsx/.css          # Question progress bar + close button
│   ├── ResultFeedback.jsx/.css       # Slide-up correct/incorrect panel
│   ├── StatsCard.jsx/.css            # Stat display tile for dashboard
│   ├── BadgePopup.jsx/.css           # Badge unlock popup with glow animation
│   └── LevelUpPopup.jsx/.css         # Level-up popup with confetti particles
├── pages/
│   ├── Home.jsx/.css                 # Landing page (hero, features, categories preview)
│   ├── Categories.jsx/.css           # Category grid + daily challenge + lesson/exercise buttons
│   ├── Lesson.jsx/.css               # Interactive lesson (collapsible sections, rules, examples)
│   ├── Exercise.jsx/.css             # Exercise session (QCM + fill-in-the-blank engine)
│   ├── Results.jsx/.css              # Post-session score + confetti + points
│   └── Dashboard.jsx/.css            # Stats, level progress, badges, history
├── data/
│   ├── exercises.js                  # 82 questions (58 QCM + 20 fill) across 4 categories
│   ├── lessons.js                    # Lesson content: rules, examples, tips, common mistakes
│   ├── levels.js                     # 6 level definitions + getLevelForPoints()
│   └── badges.js                     # 10 badge definitions + getUnlockedBadges()
├── hooks/
│   └── useLocalStorage.js            # useState synced with localStorage
└── utils/
    ├── scoring.js                    # Points calculation (base + bonuses)
    └── exerciseEngine.js             # Shuffle, session creation, daily challenge
```

## Routes

| Path | Page | Header | Description |
|------|------|--------|-------------|
| `/` | Home | Hidden | Landing page with hero, features, CTA |
| `/categories` | Categories | Visible | Category grid + daily challenge |
| `/lesson/:categoryId` | Lesson | Hidden | Rules, examples, tips for a category |
| `/exercise/:categoryId` | Exercise | Hidden | 10-question exercise session |
| `/exercise/daily` | Exercise | Hidden | Daily challenge (deterministic) |
| `/results` | Results | Hidden | Score circle, points, confetti |
| `/dashboard` | Dashboard | Visible | Stats, level, badges, history |

## State Management

All state lives in `App.jsx` via `useLocalStorage` hook, passed down as props.

### localStorage Keys

**`maplume-stats`** — User progress:
```js
{
  totalPoints: 0,
  streak: 0,
  longestStreak: 0,
  lastPlayDate: null,          // "YYYY-MM-DD"
  exercisesCompleted: 0,
  correctAnswers: 0,
  totalAnswers: 0,
  dailyChallengeLastDate: null, // "YYYY-MM-DD"
  hasPerfectScore: false,
  unlockedBadgeIds: []
}
```

**`maplume-history`** — Last 50 sessions:
```js
[{ date: "ISO string", categoryId: "homophones", score: 8, total: 10, pointsEarned: 50 }]
```

### Key State Functions (App.jsx)

- `updateStreak()` — Increments streak if consecutive day, resets otherwise
- `addSessionResult()` — Updates stats + history, checks badges/level-up
- `checkBadgesAndLevel()` — Triggers BadgePopup (500ms delay) and LevelUpPopup (500-2500ms)
- `completeDailyChallenge()` — Marks today's daily as done

## Exercise System

### Question Types

**QCM** (58 questions):
```js
{ id: "h1", type: "qcm", question: "Il ___ mangé.", options: ["a", "à"], correct: 0, explanation: "..." }
```

**Fill-in-the-blank** (20 questions):
```js
{ id: "h16", type: "fill", question: "Complétez : Il ___ parti.", answer: "est", acceptedAnswers: ["est"], hint: "Verbe être ?", explanation: "..." }
```

### Exercise Flow

1. `Exercise.jsx` reads `categoryId` from URL params
2. Daily → `getDailyChallenge()` (deterministic seed from date); otherwise → `createSession(questions, 10)`
3. Options are shuffled; correct index is recalculated
4. User answers → ResultFeedback slides up with explanation → "Continuer" → next question
5. On session complete → `addSessionResult()` → navigate to `/results` with state

### Categories (4)

| ID | Title | Icon | Color | Questions |
|----|-------|------|-------|-----------|
| `homophones` | Homophones | 🔤 | #58CC02 | ~21 |
| `conjugaison` | Conjugaison | 📝 | #1CB0F6 | ~20 |
| `accords` | Accords | 🎯 | #FF9600 | ~20 |
| `orthographe` | Orthographe | ✍️ | #CE82FF | ~21 |

## Gamification

### Scoring (scoring.js)
- **+10** per correct answer
- **+5** bonus per first-try correct
- **+20** bonus for perfect session (all correct, all first try)
- Max per session: 170 points (10 × 10 + 10 × 5 + 20)

### Levels (levels.js)
| Level | Title | Points | Icon |
|-------|-------|--------|------|
| 1 | Débutant | 0 | 🌱 |
| 2 | Apprenti | 100 | 📖 |
| 3 | Intermédiaire | 300 | 📚 |
| 4 | Avancé | 600 | 🎓 |
| 5 | Expert | 1000 | ⭐ |
| 6 | Maître | 2000 | 👑 |

### Badges (badges.js) — 10 achievements
- `first_exercise` (1 exercise), `exercises_10`, `exercises_25`
- `streak_3`, `streak_7`
- `points_100`, `points_500`, `points_1000`
- `perfect_score` (one perfect session)
- `accuracy_80` (80%+ with >10 answers)

### Daily Challenge
- Deterministic shuffle using date as seed (all users get same questions)
- 10 questions from all categories mixed
- Tracked via `dailyChallengeLastDate`

## Lesson System

Each category has a lesson page (`/lesson/:categoryId`) with:
- Intro paragraph
- 4-6 collapsible sections, each containing:
  - **Rule** — Grammar rule in a colored box
  - **Tip** — Mnemonic in a yellow callout
  - **Examples** — Sentences with bold keywords + annotations
  - **Mistakes** — Common errors shown in red
- CTA button → exercise page

Content in `src/data/lessons.js`, rendered by `src/pages/Lesson.jsx`.

## CSS Conventions

### Design Tokens (index.css `:root`)
- **Colors**: `--green` (#58CC02), `--blue` (#1CB0F6), `--red` (#FF4B4B), `--orange` (#FF9600), `--purple` (#CE82FF), `--yellow` (#FFC800) — each with `-dark`, `-light`, `-bg` variants
- **Neutrals**: `--bg` (#F7F7F7), `--surface` (#FFF), `--text` (#3C3C3C), `--text-medium`, `--text-light`, `--border`
- **Spacing**: `--space-xs` (4px) through `--space-3xl` (64px)
- **Radius**: `--radius-sm` (8px) through `--radius-full` (9999px)
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-btn`
- **Transitions**: `--transition-fast` (150ms), `--transition-normal` (250ms), `--transition-slow` (400ms)

### Naming
- **BEM**: `.component__element--modifier`
- Each component has a co-located `.css` file

### Patterns
- **Mobile-first**: max-width 600px containers, fixed top bar (50px) + bottom nav (60px)
- **3D buttons**: `box-shadow: 0 4px 0` with `translateY(2px)` on press
- **Animations**: `@keyframes` in index.css — `fadeIn`, `slideUp`, `bounce`, `shake`, `popIn`, `confetti`, etc.
- **Color opacity**: `${color}20` hex suffix for light icon backgrounds

## Component Conventions

- Functional components with hooks, default exports
- Props destructured in function signature
- Callbacks prefixed with `on`: `onAnswer`, `onNext`, `onClose`
- Emoji icons for categories and levels (no icon library)
- Inline SVGs for navigation icons

## Adding Content

### Adding exercises
Add to the appropriate category in `src/data/exercises.js`. Use sequential IDs (`h22`, `c21`, etc.).

**QCM**: `{ id, type: "qcm", question, options: [], correct: number, explanation }`
**Fill**: `{ id, type: "fill", question, answer, acceptedAnswers: [], hint, explanation }`

### Adding lessons
Add sections to the category in `src/data/lessons.js`. Each section needs: `title`, `rule`, `tip`, `examples: [{sentence, note}]`, `mistakes: []`.

### Adding badges
Add to the array in `src/data/badges.js` with a `condition(stats)` function.

## Build & Deploy

- `npm run build` → outputs to `dist/`
- Vite base path: `/Calendrier-/` (matches GitHub repo name)
- **HashRouter** used (URLs: `/#/categories`) — required for GitHub Pages
- `gh-pages` branch contains built static files
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- To redeploy manually: build, then force-push `dist/` contents to `gh-pages`
- **404.html** in `public/` handles SPA redirect fallback
