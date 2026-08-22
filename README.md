# The Arqam Schools — Website

A single-page ReactJS (Vite) site for The Arqam Schools, with campuses in
Lahore and Faisalabad.

## 1. Add your gallery images

Copy your 6 images into the `public/gallery` folder, named exactly:

```
public/gallery/1.jpg
public/gallery/2.jpg
public/gallery/3.jpg
public/gallery/4.jpg
public/gallery/5.jpg
public/gallery/6.jpg
```

These same images power both the hero background slideshow and the
dedicated Gallery section further down the page.

The official school logo already lives at `public/brand/logo.png` and is
used in the navbar, footer, and browser favicon — replace that file if you
ever get an updated version of the logo.

## 2. Install & run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## 3. Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Colors / fonts**: edit the CSS variables at the top of `src/index.css`.
- **WhatsApp number / social links**: edit `src/data.js`.
- **Branch addresses & phone numbers**: edit `BRANCHES` in `src/data.js`.
- **Curriculum grades & features**: edit `src/components/ContactCurriculum.jsx`.
- **Inquiry form**: currently front-end only (no backend). Wire up
  `handleSubmit` in `src/components/ContactCurriculum.jsx` to your API,
  email service (e.g. Formspree, EmailJS), or backend endpoint when ready.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx              # image slideshow + animated stats
    ContactCurriculum.jsx # inquiry form (left) + curriculum (right)
    Gallery.jsx            # slideshow gallery
    Branches.jsx           # Lahore & Faisalabad cards
    Footer.jsx              # social + WhatsApp + office info
    WhatsAppButton.jsx      # floating WhatsApp button
  data.js                   # gallery images, WhatsApp number, branches, socials
  index.css                 # all styles + design tokens
  App.jsx
  main.jsx
public/
  gallery/                  # put 1.jpg – 6.jpg here
```
