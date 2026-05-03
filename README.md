# Phreakers :: Wire

Final research project for *Culture of the Internet* (Prof. Russell Mills, Spring 2026).
Topic: the phreaking community.

**Live deadline:** Monday 2026-05-04.

## Layout

```
.
├── index.html              # landing
├── pages/
│   ├── phreakers.html      # 01 — who they were            (rubric: describe group)
│   ├── meeting-place.html  # 02 — the wires as venue       (rubric: online nature)
│   ├── culture.html        # 03 — norms / ethics           (rubric: cultural analysis)
│   ├── legacy.html         # 04 — crackdown + inheritance
│   └── personal.html       # 05 — personal + sources + forum link
├── css/theme.css           # vaporwave palette + base + components
├── js/nav.js               # injects shared header / footer
├── assets/                 # images, audio, etc.
├── _headers                # Cloudflare Pages security headers
├── _redirects              # Cloudflare Pages redirects
├── proposal.md             # week 5 proposal, transposed from PDF
└── README.md
```

## Local preview

Any static file server works. From the project root:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (Cloudflare Pages)

Either:

- Connect the repo to a Cloudflare Pages project and let it auto-deploy on push, or
- `npx wrangler pages deploy .` for a one-shot upload.

There is no build step — Cloudflare serves the directory as-is.

## Rubric mapping

| Required element                                | Lives in              |
|-------------------------------------------------|-----------------------|
| 1. Identify topic                               | `index.html`          |
| 2. Describe the group / activity                | `pages/phreakers.html` |
| 3. Analyze cultural characteristics             | `pages/culture.html`  |
| 4. How the on-line nature shapes the culture    | `pages/meeting-place.html` |
| Discussion forum (moderated by host)            | linked from `pages/personal.html#discussion` |
