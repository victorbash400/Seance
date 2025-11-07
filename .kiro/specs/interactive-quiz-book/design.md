# Design Document

## Overview

The Interactive Quiz Book is built as a Next.js 16 application using React 19, TypeScript, and Three.js for 3D effects. The architecture follows a component-based design with clear separation between data, presentation, and business logic layers.

## Architecture

### Technology Stack

- **Framework**: Next.js 16.0.1 with App Router
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **3D Graphics**: Three.js 0.181.0, @react-three/fiber 9.4.0
- **Styling**: Tailwind CSS 4
- **Page Flip**: react-pageflip 2.0.3
- **Map Visualization**: react-simple-maps 3.0.0
- **Effects**: react-smoke 1.2.0

### Application Structure

```
src/app/
├── components/          # Shared UI components
│   ├── WorldMap.tsx    # Interactive country selection
│   ├── SpookyBook.tsx  # Main book interface
│   ├── FlipBook.tsx    # Page-flip wrapper
│   └── SmokeBackground.tsx  # 3D atmospheric effects
├── book/               # Quiz book feature
│   ├── data/          # Question data files
│   │   ├── peoples-tales.ts
│   │   ├── crowns-secrets.ts
│   │   ├── merchants-ledger.ts
│   │   └── index.ts
│   ├── components/    # Book-specific components
│   ├── types.ts       # TypeScript interfaces
│   └── page.tsx       # Book route
└── lib/               # Utility functions
    └── progressTracker.ts
```

## Components and Interfaces

### Data Layer

#### Question Interface
```typescript
interface Question {
  question: string;
  options: string[];      // Always 4 options
  correctAnswer: number;  // Index of correct option (0-3)
  explanation: string;
}
```

#### BookData Interface
```typescript
interface BookData {
  [country: string]: {
    [path: string]: Question[];
  };
}
```

### Data Organization

Questions are organized into three thematic files:

1. **peoples-tales.ts**: Cultural folklore, myths, legends, and daily life
2. **crowns-secrets.ts**: Political history, rulers, wars, and government
3. **merchants-ledger.ts**: Economic history, trade, industry, and commerce

Each file exports a `Record<string, Question[]>` mapping country names to question arrays. The `index.ts` file combines all three sources into a unified `BookData` structure.

### Presentation Layer

#### WorldMap Component
- Renders an interactive SVG map using react-simple-maps
- Handles country selection and hover states
- Provides visual feedback for user interactions
- Passes selected country to the book interface

#### SpookyBook Component
- Main container for the quiz experience
- Manages quiz state (current question, score, path selection)
- Orchestrates page transitions
- Handles answer validation and feedback

#### FlipBook Component
- Wraps react-pageflip library
- Provides realistic page-turning animations
- Manages page navigation
- Handles touch and mouse interactions

#### SmokeBackground Component
- Uses Three.js and react-smoke for atmospheric effects
- Renders particle-based smoke effects
- Positioned as a backdrop layer (z-index management)
- Includes WebGL detection and fallback

### Business Logic Layer

#### Progress Tracker
- Stores quiz completion data in browser localStorage
- Tracks scores per country and path
- Provides methods to save and retrieve progress
- Handles data serialization and deserialization

## Data Models

### Quiz State
```typescript
{
  selectedCountry: string;
  selectedPath: string;
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  answeredQuestions: Set<number>;
  userAnswers: Map<number, number>;
}
```

### Progress Data
```typescript
{
  [country: string]: {
    [path: string]: {
      completed: boolean;
      score: number;
      totalQuestions: number;
      lastAttempt: timestamp;
    }
  }
}
```

## Error Handling

### WebGL Detection
- Check for WebGL support on component mount
- Fallback to static background if WebGL unavailable
- Display user-friendly message for unsupported browsers

### Data Loading
- Validate question data structure on load
- Handle missing country or path data gracefully
- Display error message if questions cannot be loaded

### User Input Validation
- Ensure answer selection is within valid range
- Prevent multiple submissions for same question
- Handle edge cases (empty question sets, invalid indices)

## Testing Strategy

### Unit Tests
- Test question data structure validation
- Test progress tracker save/load operations
- Test answer validation logic
- Test score calculation

### Component Tests
- Test WorldMap country selection
- Test FlipBook page navigation
- Test answer option rendering and selection
- Test score display and updates

### Integration Tests
- Test complete quiz flow from country selection to completion
- Test progress persistence across sessions
- Test path switching without data loss
- Test error handling for missing data

### Visual Regression Tests
- Test book interface rendering
- Test page-flip animations
- Test responsive layouts on different screen sizes
- Test smoke effect rendering

## Performance Considerations

### Code Splitting
- Lazy load question data per country
- Split routes using Next.js dynamic imports
- Defer non-critical 3D effects

### Asset Optimization
- Optimize SVG map data
- Compress and cache static assets
- Use Next.js Image component for images

### Rendering Optimization
- Memoize expensive computations
- Use React.memo for pure components
- Implement virtual scrolling for long lists
- Throttle animation frame updates

## Accessibility

### Keyboard Navigation
- Support Tab navigation through interactive elements
- Support Enter/Space for answer selection
- Support Arrow keys for page navigation

### Screen Reader Support
- Provide ARIA labels for interactive elements
- Announce question numbers and scores
- Provide text alternatives for visual feedback

### Visual Accessibility
- Ensure sufficient color contrast (WCAG AA)
- Support reduced motion preferences
- Provide text-based alternatives to animations
- Ensure readable font sizes (minimum 16px)
