"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import SpookyBook from "../components/SpookyBook";

function BookContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const country = searchParams.get('country') || 'United States';
  const path = searchParams.get('path') || 'People\'s Tales';

  const handleComplete = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <SpookyBook 
        country={country} 
        path={path} 
        onComplete={handleComplete}
      />
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-orange-400 text-2xl font-serif animate-pulse">
          Opening the ancient tome...
        </div>
      </div>
    }>
      <BookContent />
    </Suspense>
  );
}