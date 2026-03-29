# CLAUDE.md — [Client Name] Site

<!-- Copy this file to the client's repo and fill in the details below -->

## Site Overview

- **Client:** [Business Name]
- **Live URL:** https://[domain.com]
- **GitHub Repo:** https://github.com/hbdigital-in/client-[slug]
- **Package:** Starter / Growth / Premium
- **Client record:** See `internal-docs/clients/[slug]/client.md`

## Tech Stack

Pure static HTML/CSS/JS — no npm, no build step.

Preview locally:
```bash
python -m http.server 8000
# Open http://localhost:8000
```

## File Structure

```
www/
  index.html   # Single-page site, all sections
  style.css    # All styles — CSS variables at :root for brand colors
  script.js    # Navbar scroll, mobile menu, [add client-specific features]
  CNAME        # [domain.com]
  .gitignore
  images/      # Client photos (add as needed)
```

## Brand

- Primary color: `[#XXXXXX]`
- Accent color: `[#XXXXXX]`
- Fonts: `[Font Name]` (Google Fonts)

## Deployment

- Hosted on GitHub Pages from `main` branch
- DNS managed in Cloudflare
- HTTPS auto-managed by GitHub Pages (do not proxy through Cloudflare)

## Workflow

- Work on `dev` branch
- Client approves → merge `dev → main` → auto-deploys in ~90 seconds
- Commit messages: `feat:`, `fix:`, `content:`, `style:`

## Key Contacts

- Owner: [Name] — WhatsApp: [+91XXXXXXXXXX]
- Form submissions go to: [email@domain.com]

## Known Customizations

- [Note any non-obvious JS logic, special sections, or client-requested quirks here]
