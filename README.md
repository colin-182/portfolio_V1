# Colin Keogh portfolio

Static site: `index.html`, `style.css`, `script.js`. No build step, no dependencies.

## Edit before publishing
Search `index.html` for `EDIT`:
1. Check each project description and tech tags. They are written from the repo names, so make them match what you built.
2. Add each live demo URL to the empty `href=""` on the "Live demo" links. Empty links are hidden automatically.
3. Add the ConnectCRM demo login (see below).
4. Export your CV B as `Colin_Keogh_CV.pdf` and put it next to `index.html`.
5. Swap the email for a professional address.

## Deploy
**GitHub Pages (simplest):** create a repo named `colin-182.github.io`, upload these files, then Settings > Pages > Deploy from branch `main`. Live at `https://colin-182.github.io`.

**Render:** New > Static Site > connect the repo. Build command: leave blank. Publish directory: `.` (a dot). Free.

## Neon and Render for your projects
The portfolio itself needs no database. Use Neon (Postgres) and a Render web service for ConnectCRM only.
- Keep the database URL in an environment variable on Render, never in the repo.
- Free Render services sleep after inactivity, so the first load can take about 30 seconds. Say so next to the demo link.

## Making ConnectCRM visible to employers
1. Create a demo user with fake customers and pipeline data (never real data).
2. Show the login on the live site, or add a "Try demo" button that signs in automatically.
3. Make the demo account read-only, or reset its data on a schedule.
4. Add 3 or 4 screenshots to the repo README as a fallback if the server is asleep.