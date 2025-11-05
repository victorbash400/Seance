"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import HTMLFlipBook from "react-pageflip";

interface FlipBookProps {
  children: React.ReactNode;
  onFlip?: (e: any) => void;
  className?: string;
}

export interface FlipBookRef {
  flipNext: () => void;
  turnToPage: (page: number) => void;
  pageFlip: () => any;
}

const Page = ({ children, ...props }: any) => {
  return (
    <div className="bg-amber-50 p-8 h-full border border-amber-200 shadow-inner" {...props}>
      {children}
    </div>
  );
};

const FlipBook = forwardRef<FlipBookRef, FlipBookProps>(({ children, onFlip, className = "" }, ref) => {
  const bookRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    flipNext: () => bookRef.current?.pageFlip().flipNext(),
    turnToPage: (page: number) => bookRef.current?.pageFlip().turnToPage(page),
    pageFlip: () => bookRef.current?.pageFlip()
  }));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 p-8">
      <HTMLFlipBook
        ref={bookRef}
        width={400}
        height={600}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        onFlip={onFlip}
        className={`shadow-2xl ${className}`}
        style={{}}
        startPage={0}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        renderOnlyPageLengthChange={false}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {children}
      </HTMLFlipBook>
    </div>
  );
});

FlipBook.displayName = "FlipBook";

export { FlipBook, Page };