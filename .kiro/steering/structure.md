# Project Structure

## Seance (Next.js App)

```
seance/
├── src/app/                    # Next.js App Router structure
│   ├── components/             # Reusable React components
│   │   ├── SmokeBackground.tsx # 3D smoke effects component
│   │   ├── WorldMap.tsx        # Interactive map visualization
│   │   ├── SpookyBook.tsx      # Page-flip book interface
│   │   └── SpookyElements.tsx  # Atmospheric UI elements
│   ├── lib/                    # Utility functions and helpers
│   │   └── progressTracker.ts  # Progress tracking utilities
│   ├── book/                   # Book-themed page route
│   │   └── page.tsx
│   ├── mage/                   # Mage-themed page route
│   │   └── page.tsx
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── image.css               # Image-specific styles
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── .env.example                # Environment template
├── next.config.ts              # Next.js configuration
├── biome.json                  # Biome linter/formatter config
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## React-PageFlip (Library)

```
react-pageflip/
├── src/
│   ├── html-flip-book/         # Main component implementation
│   │   ├── index.tsx           # HTMLFlipBook component
│   │   └── settings.ts         # Configuration types/defaults
│   └── index.ts                # Library entry point
├── build/                      # Compiled output (generated)
├── rollup.config.js            # Rollup bundler configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc                   # ESLint configuration
├── .prettierrc                 # Prettier configuration
└── package.json                # Library metadata and scripts
```

## Architectural Patterns

### Seance Component Organization
- **Route-based pages**: Each route (`/`, `/book`, `/mage`) has its own page component
- **Shared components**: Reusable UI components in `components/` directory
- **Utility libraries**: Helper functions and business logic in `lib/`
- **CSS co-location**: Component-specific styles alongside components when needed

### React-PageFlip Library Structure
- **Single responsibility**: Focused on page-flipping functionality only
- **TypeScript-first**: Full type safety with exported type definitions
- **Peer dependencies**: Relies on host app's React installation
- **Rollup bundling**: Optimized for both CommonJS and ES modules

## File Naming Conventions
- **React components**: PascalCase (e.g., `SmokeBackground.tsx`)
- **Utility files**: camelCase (e.g., `progressTracker.ts`)
- **Page routes**: `page.tsx` (Next.js App Router convention)
- **Configuration files**: kebab-case or standard names (e.g., `next.config.ts`)

## Import Patterns
- Use `@/` alias for imports from `src/` directory in Seance project
- Prefer named exports over default exports for utilities
- Group imports: external libraries, internal components, types