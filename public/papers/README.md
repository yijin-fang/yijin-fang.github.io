# Paper PDFs

Place paper PDF files in this folder. Then open `app/site-data.ts` and add a `pdf` value to the corresponding publication, for example:

```ts
{
  year: '2026',
  citation: 'Your citation here.',
  pdf: '/papers/fang-christie-2026.pdf',
}
```

The website's `[pdf]` link will then open the PDF directly in a new browser tab.
