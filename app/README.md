# Invoice Generator App

This app is a client-side invoice generator designed for free Cloudflare hosting.

## Features

- Owner-friendly invoice form
- Dynamic line items and automatic totals
- Tax and discount calculation
- Draft save to browser localStorage
- Export invoice data as JSON
- Print layout for Save as PDF

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

## Deploy to Cloudflare Pages on a Subdomain

Use this app as a second Pages project in the same repository.

1. In Cloudflare Dashboard, go to Workers and Pages.
2. Create application -> Pages -> Connect to Git.
3. Select this repository.
4. Configure build:
   - Root directory: `app`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy.
6. In the Pages project, open Custom domains and add `invoice.yourdomain.com`.

## Keep It Owner-Only (Free)

Use Cloudflare Zero Trust Access:

1. Zero Trust -> Access -> Applications.
2. Add self-hosted application for `invoice.yourdomain.com`.
3. Allow only your email address.

This keeps the invoice tool private while your landing page remains public.
