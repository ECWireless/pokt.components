# Pocket Network UI

This is a Pocket Network themed UI component library to be used in other projects. It is built with Typescript, Tailwind and shadcn.

## Components

Here are the following components already built and their URL to add to your project via shadcn CLI:

| Component | Registry URL |
|-----------|--------------|
| Theme | `/r/theme.json` |
| Button | `/r/button.json` |
| Card | `/r/card.json` |
| Logo | `/r/logo.json` |
| PoktIcon | `/r/pokt-icon.json` |

## How to use

These instructions assume you are adding these components into a Next.js project. If you are using a different framework, there could be adjustments you need to do. Please follow the [official shadcn docs](https://ui.shadcn.com/docs/installation) in case of that.

If you have built any project with shadcn before, the setup should be identical (or at least very similar).

There are 2 ways to add theme and components to your project:
1. Use the shadcn CLI to add from registry
2. Manually copy and paste from `src/app/globals.css` and `src/components/ui`

The instructions below will cover both options to set up your project:

### Step 1: Add shadcn

Run the `init` command from shadcn to start (if it is a Next.js project):

```
bunx --bun shadcn@latest init
```

For more information on this step, please follow the [official shadcn docs](https://ui.shadcn.com/docs/installation) for installation.

### Step 2: Add font and color theme

#### Add CSS theme via shadcn CLI
🚧 ***TODO: Replace `http://localhost:3000` with hosted registry URL***
```
bunx --bun shadcn@latest add http://localhost:3000/r/theme.json
```

This will update the CSS variables in your `globals.css` file with Pocket Network color palette and font.

#### Add CSS theme manually
Copy `src/app/globals.css` into your project. If you have an existing `globals.css` file, replace it with this one.

This includes the CSS variables for Pocket Network's font and color themes.

### Step 3: Add components
There are 2 ways to add theme and components to your project:
1. Use the shadcn CLI to add from registry
2. Manually copy and paste from `src/components/ui` folder

#### Add components via shadcn CLI
🚧 ***TODO: Replace `http://localhost:3000` with hosted registry URL***
```
bunx --bun shadcn@latest add http://localhost:3000/r/button.json
```

#### Add components manually
All components are found in `src/components/ui`. Copy and paste the files of your choosing into your project.

```
cp src/components/ui/button.tsx path/to/project/components/ui/button.tsx
```

Note: Some components may require npm dependencies.

## Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
