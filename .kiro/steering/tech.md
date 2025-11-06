# Technology Stack

## Seance Project

### Framework & Runtime
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5** - Type safety and modern JS features
- **Node.js** - Runtime environment

### 3D Graphics & Effects
- **Three.js 0.181.0** - 3D graphics library
- **@react-three/fiber 9.4.0** - React renderer for Three.js
- **react-smoke 1.2.0** - Particle-based smoke effects
- **react-pageflip 2.0.3** - Page turning animations

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **react-simple-maps 3.0.0** - SVG map components

### Development Tools
- **Biome 2.2.0** - Fast linter and formatter (replaces ESLint/Prettier)
- **TypeScript** - Static type checking
- **pnpm** - Package manager

### Build System
- **Next.js built-in bundler** - Webpack-based with optimizations
- **Turbopack** - Available for faster development builds

## React-PageFlip Library

### Build System
- **Rollup** - Module bundler for library distribution
- **TypeScript 4.0.3** - Compilation and type definitions
- **ESLint + Prettier** - Code quality and formatting

### Dependencies
- **page-flip** - Core page flipping engine
- **React 17+** - Peer dependency

## Common Commands

### Seance Development
```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting and formatting
pnpm lint
pnpm format
```

### React-PageFlip Development
```bash
# Build library
npm run build

# Watch mode for development
npm run build:dev

# Linting
npm run eslint
```

## Configuration Notes
- Biome configuration prioritizes React and Next.js rules
- TypeScript uses strict mode with modern target (ES2017)
- Path aliases configured: `@/*` maps to `./src/*`
- Tailwind CSS v4 with PostCSS integration