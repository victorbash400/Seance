# Séance

A mystical Next.js web application featuring immersive 3D effects and interactive storytelling. Explore dark folklore from around the world through an atmospheric interface with realistic smoke effects, interactive maps, and page-flipping books.

## Features

- **Interactive World Map**: Click on countries to explore their dark folklore using react-simple-maps
- **3D Smoke Effects**: Atmospheric background effects powered by react-smoke and Three.js with configurable turbulence, wind, and particle density
- **Page-Flipping Books**: Realistic book interface using react-pageflip for immersive storytelling with audio feedback
- **Audio Feedback**: Page flip sound effects enhance the immersive reading experience
- **Educational Quiz System**: Learn about different countries' history through interactive questions with smart page progression
- **Progress Tracking**: Save your progress as you complete different story paths
- **Responsive Design**: Optimized for both desktop and mobile experiences with graceful WebGL fallbacks
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
│   ├── SmokeBackground.tsx    # 3D smoke effects with WebGL detection and CSS fallback
│   ├── WorldMap.tsx           # Interactive world map
│   ├── FlipBook.tsx           # Enhanced page-flipping book wrapper
│   └── SpookyBook.tsx         # Themed book interface
├── book/               # Book reading experience
│   ├── components/
│   │   └── QuestionBook.tsx   # Interactive quiz book with smart pagination and audio
│   ├── data.ts                # Quiz questions and answers by country/path
│   ├── types.ts               # TypeScript interfaces for quiz system
│   └── page.tsx               # Book route handler
├── mage/               # Character selection page
├── lib/                # Utility functions
│   └── progressTracker.ts     # Progress persistence and retrieval
└── page.tsx            # Home page with world map

public/
└── sound/              # Audio assets
    └── pageflip.mp3    # Page turning sound effect
```

## Book Configuration

The FlipBook component is a custom wrapper around react-pageflip with the following features:

### Component Configuration
- **Dimensions**: Fixed 640px × 480px for consistent experience
- **Animation**: 600ms flip timing with realistic shadows
- **Interaction**: Touch, mouse, and click support with 30px swipe distance for gestures
- **Click-to-Flip**: Pages can be flipped by clicking on page corners
- **Accessibility**: Keyboard navigation and screen reader support

### Enhanced Features
- **Imperative API**: Exposed methods for programmatic page control (`flipNext`, `turnToPage`)
- **Custom Page Component**: Pre-styled pages with parchment-like appearance
- **Event Handling**: Comprehensive flip event system for quiz progression
- **Audio Feedback**: Page flip sound effects triggered on page turns (volume: 0.5, graceful failure handling)
- **Mobile Optimization**: Touch-friendly interactions with swipe gestures
- **Multiple Interaction Methods**: Supports clicking page corners, swiping, and programmatic navigation

### Smart Page Progression
- Pages unlock based on correct quiz answers
- Left/right page layout with contextual navigation prompts
- Progress-based access control to maintain educational flow
- Visual indicators for page accessibility status
- Audio feedback on successful page turns for enhanced user experience

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linter
pnpm format       # Format code with Biome
```

## Recent Updates

### Smoke Effects Enhancement
- **Updated react-smoke Integration**: Fixed import issues and updated to use the correct `SmokeScene` component API
- **Enhanced Configuration**: Implemented comprehensive smoke configuration with turbulence, wind effects, and particle density controls
- **Improved Fallback**: Enhanced CSS-based fallback smoke effects for non-WebGL environments
- **Performance Optimization**: Configured optimal particle density and animation parameters for smooth performance across devices

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

This application uses WebGL for 3D smoke effects powered by react-smoke. The smoke effects feature:

- **Turbulence Effects**: Configurable turbulence strength for realistic smoke movement
- **Wind Simulation**: Multi-directional wind effects with customizable strength and direction
- **Particle Density**: Adjustable particle count (default: 80 particles) for performance optimization
- **Rotation Effects**: Subtle rotation animations for enhanced realism
- **Graceful Fallback**: If WebGL is not supported, the app automatically falls back to CSS gradient-based smoke effects while maintaining full functionality

### Smoke Configuration

The smoke effects are configured with the following parameters:
- Turbulence: Enabled with strength [0.08, 0.08, 0.08] for natural movement
- Wind: Multi-directional wind with strength [0.06, 0.04, 0.02] and direction [1, 0.5, 0]
- Density: 80 particles for optimal performance/quality balance
- Opacity: 0.6 for atmospheric effect without overwhelming content
- Rotation: Subtle [0, 0, 0.02] rotation for enhanced realism

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [react-pageflip](https://github.com/Nodlik/react-pageflip)
