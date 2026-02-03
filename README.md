# Industrial8 (Next.js wrapper)

This wraps the existing static `industrial8/` site inside a Next.js project by copying the HTML into `public/` and serving matching `index.html` files through a catch-all Next.js route.

## Run locally

```bash
cd industrial8-nextjs
npm install
npm run dev
```

Then open `http://localhost:3000`.

## How routing works

- `/` serves `public/index.html`
- `/shop` serves `public/shop/index.html`
- `/contacts` serves `public/contacts/index.html`
- Any other path tries `public/<path>/index.html`, then `public/<path>.html`, then `public/<path>`

