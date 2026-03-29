# HBDigital — Static Site Template

Use this template when starting a new client project.

**To use:** Click "Use this template" on GitHub → name the repo `client-[slug]` under the `hbdigital-in` org.

---

## Setup Checklist (After Creating from Template)

### 1. Clone & Configure
```bash
git clone https://github.com/hbdigital-in/client-[slug].git C:/Dev/client-[slug]
```

Edit `www/index.html`:
- Replace all `[placeholder]` values with client content
- Update meta description and title
- Update JSON-LD schema (business name, phone, address)
- Update Formspree form ID (`action="https://formspree.io/f/[FORM_ID]"`)
- Update WhatsApp number in all `wa.me` links

Edit `www/style.css`:
- Update `:root` CSS variables for client's brand colors and fonts
- Swap Google Fonts import for client's preferred typeface

Edit `www/CNAME`:
- Replace with client's domain (e.g., `clientdomain.in`)

### 2. Develop & Preview
```bash
cd C:/Dev/client-[slug]/www
python -m http.server 8000
# Open http://localhost:8000
```

Work on the `dev` branch, merge to `main` only after client approves.

### 3. Deploy to GitHub Pages
1. Push `main` branch to GitHub
2. GitHub → repo Settings → Pages → Source: `main`, folder: `/www`
3. GitHub will detect the CNAME file automatically

### 4. DNS Setup in Cloudflare
Add these records for the client's domain:

**A records (apex domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record:**
```
www  →  hbdigital-in.github.io  (DNS only, NOT proxied)
```

### 5. Enable HTTPS
GitHub Pages → Settings → Pages → Enforce HTTPS (wait ~15 min after DNS propagates)

---

## File Structure

```
www/
  index.html    # All content — update placeholders
  style.css     # CSS variables at :root — customize for client brand
  script.js     # Navbar, mobile menu, optional gallery/form enhancements
  CNAME         # Client's domain (no https://, no www)
  .gitignore    # Ignores OS junk files
```

---

## Tech Stack

- Vanilla HTML5 / CSS3 / JS — no frameworks, no build step
- Google Fonts
- Formspree for contact form
- GitHub Pages for hosting
- Cloudflare for DNS
