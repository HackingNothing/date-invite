# Date invitation

A single-purpose, slightly unfair date invitation. Not a dating platform. Send the link, ask the question, and make "no" do a little cardio.

The whole thing is a client-side React SPA: home → celebration → pick a day/time → pick food → a short letter → a fake $499 "Date Agreement™" checkout. Nothing is charged. Nothing is stored on a server.

Copy, photo, and the punchline live in `src/content.ts` plus `public/profile.jpg`, so you can swap them without hunting through components.

## Run locally

Needs Node 20+.

```bash
npm install
npm run dev
```

Then open [http://127.0.0.1:43173](http://127.0.0.1:43173).

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on port **43173** |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve the production build on **43173** |
| `npm run lint` | Oxlint |

## Pages

| Path | What happens |
| --- | --- |
| `/` | The question. Pink **YES ♥** stays put. Lavender **no 🐾** runs away on hover, pointer, or tap — including off the card. |
| `/yay` | Confetti. Shock. "okay okay! →" |
| `/date` | Required day + time (12:00 PM–9:00 PM, 30-minute steps). Empty fields do not advance. |
| `/food` | Pizza, sushi, burgers, pasta, tacos, ramen. A pick highlights, then continues. |
| `/letter` | Pickup line, personal P.S., hearts, accept. |
| `/paywall` | Joke checkout. **pay $499 & confirm** is theater only. **go back** returns to the letter. |
| `/paid` | Playful confirmation. No payment processor. No card form. |

Choices for day, time, and food are kept in `sessionStorage` so a refresh mid-flow does not wipe them.

## Personalize

1. Replace `public/profile.jpg` with a photo (square-ish, ~400px is plenty).
2. Edit the strings in `src/content.ts` — headline, letter, P.S., fee copy, all of it.
3. Redeploy.

## Deploy

This is a static Vite app. Client-side routes need a fallback to `index.html` (already configured).

### Vercel

```bash
npm i -g vercel
vercel
```

`vercel.json` rewrites every path to `index.html`.

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

`netlify.toml` and `public/_redirects` both send unknown paths to the SPA.

### Any static host

```bash
npm run build
```

Upload `dist/`. Configure the host so all routes serve `index.html`.

## Stack

Vite, React, TypeScript, Tailwind CSS, React Router. No auth, no backend, no database.

Live demo: https://hackingnothing.github.io/
