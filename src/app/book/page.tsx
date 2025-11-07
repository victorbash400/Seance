"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import QuestionBook from "./components/QuestionBook";
import { bookData } from "./data/index";

function BookContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const country = searchParams.get("country") || "United States";
  const path = searchParams.get("path") || "People's Tales";

  const questions = bookData[country]?.[path] || [];

  const handleComplete = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <QuestionBook
        country={country}
        path={path}
        questions={questions}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-black flex items-center justify-center">
          <div className="text-orange-400 text-2xl font-serif animate-pulse">
            Opening the ancient tome...
          </div>
        </div>
      }
    >
      <BookContent />
    </Suspense>
  );
}
