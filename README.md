# Séance

A mystical Next.js web application featuring immersive 3D effects and interactive storytelling. Explore dark folklore from around the world through an atmospheric interface with realistic smoke effects, interactive maps, and page-flipping books.

## Features

- **Interactive World Map**: Click on countries to explore their dark folklore using react-simple-maps
- **3D Smoke Effects**: Atmospheric background effects powered by react-smoke and Three.js
- **Page-Flipping Books**: Realistic book interface using react-pageflip for immersive storytelling
- **Educational Quiz System**: Learn about different countries' history through interactive questions with smart page progression
- **Progress Tracking**: Save your progress as you complete different story paths
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Smart Page Navigation**: Questions are distributed across book spreads with intuitive left/right page layout

## Technology Stack

- **Next.js 16.0.1** with App Router
- **React 19.2.0** with concurrent features
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling
- **Three.js & React Three Fiber** for 3D graphics
- **react-smoke** for particle effects
- **react-pageflip** for book animations
- **react-simple-maps** for world map visualization

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/app/
├── components/          # Reusable React components
│   ├── SmokeBackground.tsx    # 3D smoke effects
│   ├── WorldMap.tsx           # Interactive world map
│   ├── FlipBook.tsx           # Enhanced page-flipping book wrapper
│   └── SpookyBook.tsx         # Themed book interface
├── book/               # Book reading experience
│   ├── components/
│   │   └── QuestionBook.tsx   # Interactive quiz book with smart pagination
│   ├── data.ts                # Quiz questions and answers by country/path
│   ├── types.ts               # TypeScript interfaces for quiz system
│   └── page.tsx               # Book route handler
├── mage/               # Character selection page
├── lib/                # Utility functions
│   └── progressTracker.ts     # Progress persistence and retrieval
└── page.tsx            # Home page with world map
```

## Book Configuration

The FlipBook component is a custom wrapper around react-pageflip with the following features:

### Component Configuration
- **Dimensions**: Fixed 640px × 480px for consistent experience
- **Animation**: 600ms flip timing with realistic shadows
- **Interaction**: Touch and mouse support with 30px swipe distance
- **Accessibility**: Keyboard navigation and screen reader support

### Enhanced Features
- **Imperative API**: Exposed methods for programmatic page control (`flipNext`, `turnToPage`)
- **Custom Page Component**: Pre-styled pages with parchment-like appearance
- **Event Handling**: Comprehensive flip event system for quiz progression
- **Mobile Optimization**: Touch-friendly interactions with swipe gestures

### Smart Page Progression
- Pages unlock based on correct quiz answers
- Left/right page layout with contextual navigation prompts
- Progress-based access control to maintain educational flow
- Visual indicators for page accessibility status

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linter
pnpm format       # Format code with Biome
```

## Quiz System

The interactive book features an advanced quiz system with the following capabilities:

### Smart Page Progression
- Questions are distributed across book pages with proper left/right page layout
- Users must answer questions correctly to unlock subsequent pages
- Page access is controlled to maintain quiz integrity and educational flow
- Visual indicators show whether you're on a left or right page of the spread

### User Experience Features
- **Progressive Unlocking**: Only accessible pages can be turned, preventing users from skipping ahead
- **Contextual Navigation**: Different prompts for left vs right pages (continue on spread vs turn page)
- **Answer Validation**: Immediate feedback with explanations for both correct and incorrect answers
- **Progress Persistence**: Scores and completion status are saved locally using localStorage
- **Graceful Fallbacks**: Robust error handling for edge cases and invalid states
- **Imperative Control**: Programmatic page navigation through exposed FlipBook methods

### Book Structure
- **Cover Page**: Themed introduction with country and path information
- **Question Pages**: Interactive quiz content with multiple choice answers
- **Completion Page**: Final score display with personalized messages based on performance

### FlipBook API

The FlipBook component provides an imperative API through refs:

```typescript
interface FlipBookRef {
  flipNext: () => void;           // Turn to next page
  turnToPage: (page: number) => void;  // Jump to specific page
  pageFlip: () => any;            // Access underlying pageflip instance
}
```

**Usage Example:**
```typescript
const bookRef = useRef<FlipBookRef>(null);

// Turn to next page programmatically
const handleNext = () => {
  bookRef.current?.flipNext();
};

// Jump to specific page
const goToPage = (pageNumber: number) => {
  bookRef.current?.turnToPage(pageNumber);
};
```

## WebGL Requirements

This application uses WebGL for 3D smoke effects. If WebGL is not supported, the app gracefully falls back to CSS gradient backgrounds while maintaining full functionality.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [react-pageflip](https://github.com/Nodlik/react-pageflip)
