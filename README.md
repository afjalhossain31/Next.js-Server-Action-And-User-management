This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stack

- **Framework**: Next.js 16.2.5
- **Frontend**: React 19.2.4
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **Language**: JavaScript (ES Modules)

## Features

- Modern Next.js App Router structure
- Tailwind CSS for styling
- DaisyUI component library for UI components
- ESLint for code linting
- PostCSS for CSS processing

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## DaisyUI Setup

This project uses DaisyUI for UI components. DaisyUI has been installed and configured:

- Installed: `npm i -D daisyui@latest`
- Configured in `src/app/globals.css` with `@plugin "daisyui";`

You can now use DaisyUI classes like `btn`, `card`, `modal`, etc. in your components.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind and DaisyUI
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   ├── about/
│   │   ├── page.jsx
│   │   ├── designers/
│   │   │   └── page.jsx
│   │   └── developers/
│   │       └── page.jsx
│   └── contact/
│       └── page.jsx
└── components/              # Reusable components
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [DaisyUI Documentation](https://daisyui.com/docs/install/) - learn about DaisyUI components.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
