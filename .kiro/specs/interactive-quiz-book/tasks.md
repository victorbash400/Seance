# Implementation Plan

- [x] 1. Set up project structure and dependencies

  - Initialize Next.js 16 project with TypeScript
  - Install and configure Three.js, react-three/fiber, and react-smoke
  - Install react-pageflip and react-simple-maps
  - Configure Tailwind CSS 4 and PostCSS
  - Set up Biome for linting and formatting
  - _Requirements: 6.1, 6.2, 6.3_


- [x] 2. Create data models and type definitions
  - Define Question interface with question, options, correctAnswer, and explanation fields
  - Define BookData interface for country and path organization
  - Create types.ts file in book directory
  - _Requirements: 3.1, 3.2_


- [x] 3. Implement question data structure
  - Create peoples-tales.ts with folklore and cultural questions
  - Create crowns-secrets.ts with political history questions
  - Create merchants-ledger.ts with economic history questions
  - Implement index.ts to combine all three data sources
  - Add questions for 19 countries across all three paths

  - _Requirements: 1.4, 2.1, 2.3_

- [x] 4. Build WorldMap component
  - Integrate react-simple-maps for SVG map rendering
  - Implement country selection click handlers
  - Add hover states with visual feedback
  - Style map with appropriate colors and borders

  - Handle country name mapping and validation
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 5. Create FlipBook component wrapper
  - Integrate react-pageflip library
  - Configure page dimensions and flip animations
  - Implement page navigation controls

  - Add touch and mouse event handlers
  - Style book pages with appropriate theming
  - _Requirements: 3.1, 3.5_

- [x] 6. Implement SpookyBook main quiz interface
  - Create quiz state management (current question, score, path)
  - Implement path selection UI with three options
  - Build question display with four answer options
  - Add answer selection and validation logic

  - Implement immediate feedback for correct/incorrect answers
  - Display explanation text after answer selection
  - Add navigation to next question
  - _Requirements: 2.1, 2.2, 2.3, 3.2, 3.3, 3.4, 3.5_

- [x] 7. Build progress tracking system
  - Create progressTracker.ts utility module

  - Implement localStorage save and load functions
  - Track score and completion status per country and path
  - Add timestamp for last attempt
  - Handle data serialization and error cases
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 8. Create completion page

  - Design completion UI with final score display
  - Show percentage and total questions answered
  - Add congratulatory messaging based on score
  - Implement navigation back to map or path selection
  - Save completion data to progress tracker
  - _Requirements: 4.3_

- [x] 9. Implement SmokeBackground atmospheric effects

  - Integrate Three.js and react-smoke
  - Create particle-based smoke rendering
  - Position as backdrop layer with proper z-index
  - Implement WebGL detection
  - Add fallback for non-WebGL browsers
  - Optimize particle count for performance
  - _Requirements: 5.1, 5.3, 6.4_


- [x] 10. Add sound effects and audio management
  - Create SoundManager component
  - Add page-turn sound effects
  - Add interaction feedback sounds
  - Implement mute/unmute controls
  - Store audio preferences in localStorage

  - _Requirements: 5.2, 5.4_

- [x] 11. Implement responsive design
  - Create mobile-friendly layouts (< 768px)
  - Optimize tablet layouts (768-1023px)
  - Ensure desktop experience (>= 1024px)
  - Test touch interactions on mobile devices

  - Adjust font sizes and spacing for readability
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 12. Add error handling and edge cases
  - Implement WebGL fallback logic
  - Handle missing country or path data
  - Validate question data structure on load

  - Add error boundaries for component failures
  - Display user-friendly error messages
  - _Requirements: 6.4_

- [x] 13. Optimize performance
  - Implement code splitting for question data
  - Add lazy loading for heavy components

  - Optimize Three.js rendering loop
  - Compress and cache static assets
  - Measure and optimize load times
  - _Requirements: 6.5_

- [x] 14. Implement accessibility features

  - Add ARIA labels to interactive elements
  - Support keyboard navigation (Tab, Enter, Arrow keys)
  - Ensure color contrast meets WCAG AA standards
  - Add reduced motion support for animations
  - Test with screen readers
  - _Requirements: 6.1, 6.2, 6.3_


- [x]* 15. Write unit tests
  - Test question data validation
  - Test progress tracker save/load operations
  - Test answer validation logic
  - Test score calculation
  - _Requirements: 3.3, 4.1, 4.2_

- [x]* 16. Write component tests
  - Test WorldMap country selection
  - Test FlipBook page navigation
  - Test answer rendering and selection
  - Test score display updates
  - _Requirements: 1.2, 1.3, 3.2, 3.3_

- [x]* 17. Write integration tests
  - Test complete quiz flow from start to finish
  - Test progress persistence across sessions
  - Test path switching without data loss
  - Test error handling scenarios
  - _Requirements: 2.4, 4.4_
