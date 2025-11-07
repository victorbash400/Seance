"use client";

import { FlipBook, Page } from "./FlipBook";

interface SpookyBookProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onFlip?: (e: any) => void;
  className?: string;
}

export default function SpookyBook({
  title,
  subtitle,
  children,
  onFlip,
  className,
}: SpookyBookProps) {
  return (
    <FlipBook onFlip={onFlip} className={className}>
      {/* Cover Page */}
      <Page>
        <div className="flex flex-col h-full text-center">
          {/* Top section */}
          <div className="pt-8">
            <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
          </div>

          {/* Middle section */}
          <div className="flex-1 flex items-center justify-center">
            {subtitle && (
              <h2 className="text-4xl text-white font-bold">{subtitle}</h2>
            )}
          </div>

          {/* Bottom section */}
          <div className="pb-8">
            <p className="text-white italic">
              Turn the page to begin your journey...
            </p>
          </div>
        </div>
      </Page>

      {children}
    </FlipBook>
  );
}
