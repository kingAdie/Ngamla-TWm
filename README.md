# NGAMLA TWM SECURITY WEBSITE
## Deployment & File Structure Guide

---

## FOLDER STRUCTURE

```
ngamla-website/
├── index.html          ← Home page
├── about.html          ← About page
├── services.html       ← Services page
├── projects.html       ← Projects page
├── contact.html        ← Contact page
│
├── css/
│   └── style.css       ← All styles (responsive, animations, layout)
│
├── js/
│   ├── main.js         ← Navigation, scroll, reveal animations, form
│   └── ai-agent.js     ← AI chat widget (fully self-contained)
│
├── assets/
│   ├── images/         ← Add your images here (logo, project photos)
│   └── icons/          ← Custom icons if needed
│
└── README.md           ← This file
```

---

## HOW TO DEPLOY ON NETLIFY (Free)

### Option A — Drag & Drop (Fastest)
1. Go to **https://app.netlify.com**
2. Sign up for a free account (use Google or email)
3. From your dashboard, click **"Add new site"** → **"Deploy manually"**
4. Drag the entire `ngamla-website/` folder into the upload area
5. Netlify will give you a live URL instantly (e.g. `random-name.netlify.app`)
6. To set a custom domain: **Site settings → Domain management → Add custom domain**

### Option B — Git + Netlify (Recommended for updates)
1. Upload all files to a GitHub repository
2. Go to **https://app.netlify.com** → **"Add new site"** → **"Import from Git"**
3. Connect GitHub and select your repository
4. Build command: leave blank
5. Publish directory: leave blank (or `/`)
6. Click **Deploy site**
7. Any future file changes pushed to GitHub will auto-deploy

---

## HOW TO ADD YOUR LOGO

1. Save your logo as `assets/images/logo.png` (transparent PNG recommended)
2. In each HTML file, replace the `.nav-logo-icon` div with:
```html
<img src="assets/images/logo.png" alt="Ngamla Twm Security" width="44" height="44" />
```

---

## HOW TO ADD PROJECT PHOTOS

1. Save your gallery photos to `assets/images/gallery/`
2. In `projects.html`, replace each `.gallery-item` div with:
```html
<div class="gallery-item" style="padding:0;overflow:hidden;">
  <img src="assets/images/gallery/photo1.jpg" alt="CCTV installation" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />
</div>
```

---

## HOW TO CONNECT THE CONTACT FORM TO EMAIL

The form currently shows a success message on submit. To receive actual emails, use one of these free services:

### Option A — Netlify Forms (If using Netlify hosting)
Add `netlify` attribute to the form tag:
```html
<form id="contactForm" name="contact" netlify>
```
Netlify will capture submissions and email you automatically.

### Option B — Formspree (Free up to 50 submissions/month)
1. Go to **https://formspree.io** and create a free account
2. Create a new form and get your endpoint URL
3. Change the form tag to:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
4. Remove the JavaScript form handler from `main.js` (or leave both — Formspree works independently)

---

## CUSTOM DOMAIN SETUP

If you have a domain (e.g. `ngamlatwmsecurity.co.za`):
1. In Netlify: **Site settings → Domain management → Add custom domain**
2. Follow the DNS configuration instructions (add CNAME or A records)
3. Netlify provides free SSL certificates automatically

---

## GOOGLE MAPS INTEGRATION

To add a real map on the Contact page:
1. Go to **https://developers.google.com/maps/documentation/embed/get-started**
2. Create a free API key (or use the Embed API which is free)
3. In `contact.html`, replace the `.map-placeholder` div with:
```html
<div style="border-radius:8px;overflow:hidden;height:320px;">
  <iframe
    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Tshipise+Sagole+Village,+Limpopo,+South+Africa"
    width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy">
  </iframe>
</div>
```

---

## UPGRADING THE AI CHAT TO REAL AI

The AI widget uses a hardcoded JavaScript knowledge base. To upgrade to real AI:
1. The `getBotReply()` function in `ai-agent.js` can be replaced with a `fetch()` call to the Anthropic Claude API or any other AI provider
2. The widget UI, lead capture, and conversation flow remain unchanged
3. Simply replace the function body with an async API call

---

## WEBSITE PAGES SUMMARY

| Page | File | Purpose |
|------|------|---------|
| Home | index.html | Hero, services overview, process, sectors, featured project |
| About | about.html | Company overview, vision, mission, values, leadership, compliance |
| Services | services.html | CCTV installation, government sector, maintenance details |
| Projects | projects.html | National Library Cape Town case study + gallery |
| Contact | contact.html | Enquiry form, contact info, map placeholder |

---

## PERFORMANCE & SEO

- All pages include meta titles and descriptions ✅
- Semantic HTML (main, section, nav, footer, h1-h4) ✅
- Images use `loading="lazy"` ✅
- CSS uses `clamp()` for fluid responsive typography ✅
- Mobile-first design with hamburger menu ✅
- Scroll reveal animations using IntersectionObserver ✅

---

*Website built for Ngamla Twm Security (Pty) Ltd — CIPC: 2024/412986/07 | PSIRA: 4738249*
