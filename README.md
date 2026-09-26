# Yijin Fang - Personal Academic Website

This is a three-page academic website with Home, Publications, and CV pages.

## The easiest way to update the website

- Personal details, links, and publications: edit `app/site-data.ts`.
- Profile photo: replace `public/photo.png` with a new image using the same filename.
- Paper PDFs: add files to `public/papers/`, then set each publication's `pdf` path in `app/site-data.ts`.
- CV: replace `public/CV_Yijin_Fang.pdf` with a newer PDF using the same filename.
- Homepage introduction and research interests: edit `app/page.tsx`.

## Preview locally

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal.

## Build

```bash
npm run build
```
