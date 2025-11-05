"use client";

import { FlipBook, Page } from "./FlipBook";

interface SpookyBookProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onFlip?: (e: any) => void;
  className?: string;
}

export default function SpookyBook({ title, subtitle, children, onFlip, className }: SpookyBookProps) {
  return (
    <FlipBook onFlip={onFlip} className={className}>
      {/* Cover Page */}
      <Page>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl text-amber-700 mb-8">
              {subtitle}
            </h2>
          )}
          <p className="text-amber-600 italic">
            Turn the page to begin your journey...
          </p>
        </div>
      </Page>
      
      {children}
    </FlipBook>
  );
}