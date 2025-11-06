"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import HTMLFlipBook from "react-pageflip";
import SmokeBackground from "./SmokeBackground";

interface FlipBookProps {
  children: React.ReactNode;
  onFlip?: (e: any) => void;
  onChangeState?: (e: any) => void;
  onInit?: (e: any) => void;
  className?: string;
}

export interface FlipBookRef {
  flipNext: () => void;
  turnToPage: (page: number) => void;
  pageFlip: () => any;
}

const Page = ({ children, ...props }: any) => {
  return (
    <div className="custom-page relative overflow-hidden bg-amber-50 p-8 h-full border border-amber-200" {...props}>
      {/* left edge shadow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '16px',
          pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(0,0,0,0.25), rgba(0,0,0,0))',
        }}
      />

      {/* right edge shadow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '16px',
          pointerEvents: 'none',
          background: 'linear-gradient(to left, rgba(0,0,0,0.25), rgba(0,0,0,0))',
        }}
      />

      <div className="page-content h-full relative bg-transparent">
        {children}
      </div>
    </div>
  );
};

const FlipBook = forwardRef<FlipBookRef, FlipBookProps>(({ children, onFlip, onChangeState, onInit, className = "" }, ref) => {
  const bookRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    flipNext: () => bookRef.current?.pageFlip()?.flipNext(),
    turnToPage: (page: number) => bookRef.current?.pageFlip()?.turnToPage(page),
    pageFlip: () => {
      console.log("pageFlip object:", bookRef.current?.pageFlip());
      return bookRef.current?.pageFlip();
    }
  }));

  return (
    <div className="relative flex items-center justify-center min-h-screen p-8">
  <SmokeBackground variant="desk" />
      <div className="book-wrapper relative">
        {/* central spine overlay for subtle vertical shadow on the book spine */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            transform: 'translateX(-50%)',
            width: '36px',
            pointerEvents: 'none',
            // subtle spine gradient; placed behind the book element
            background:
              'linear-gradient(to right, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.22) 100%)',
            zIndex: 0,
            mixBlendMode: 'normal',
          }}
        />

        <HTMLFlipBook
        ref={bookRef}
        width={640}
        height={480}
        minWidth={0}
        maxWidth={10000}
        minHeight={0}
        maxHeight={10000}
        size="fixed"
        drawShadow={true}
        flippingTime={600}
        usePortrait={false}
        startZIndex={30}
        autoSize={false}
        maxShadowOpacity={0.9}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onFlip}
        onChangeState={onChangeState}
        onInit={onInit}
  className={`shadow-2xl book-3d ${className}`}
  style={{ zIndex: 1 }}
        startPage={0}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        renderOnlyPageLengthChange={false}
        showPageCorners={true}
        disableFlipByClick={true}
      >
        {children}
      </HTMLFlipBook>
      </div>
    </div>
  );
});

FlipBook.displayName = "FlipBook";

export { FlipBook, Page };