"use client";

import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { saveProgress, getPathScore } from "../lib/progressTracker";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface BookData {
  [country: string]: {
    [path: string]: Question[];
  };
}

const bookData: BookData = {
  "United States": {
    "People's Tales": [
      {
        question: "What was the main reason families moved west during the 1800s?",
        options: ["Gold rush", "Free land", "Religious freedom", "All of the above"],
        correctAnswer: 3,
        explanation: "Families moved west for gold, free land through the Homestead Act, and religious freedom."
      },
      {
        question: "What did most American families eat for breakfast in the 1800s?",
        options: ["Cereal and milk", "Bread and butter", "Eggs and bacon", "Porridge and molasses"],
        correctAnswer: 3,
        explanation: "Most families ate simple porridge with molasses, as it was cheap and filling."
      },
      {
        question: "How did most people travel between cities in the early 1800s?",
        options: ["By train", "By horse and wagon", "By boat", "On foot"],
        correctAnswer: 1,
        explanation: "Horse-drawn wagons were the primary means of land transportation before railroads expanded."
      }
    ],
    "Crown's Secrets": [
      {
        question: "Which war established the United States as an independent nation?",
        options: ["Civil War", "War of 1812", "Revolutionary War", "French and Indian War"],
        correctAnswer: 2,
        explanation: "The Revolutionary War (1775-1783) won independence from Britain."
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
        correctAnswer: 3,
        explanation: "George Washington served as the first President from 1789 to 1797."
      },
      {
        question: "What was the main cause of the American Civil War?",
        options: ["Taxation", "Slavery", "Trade disputes", "Religious differences"],
        correctAnswer: 1,
        explanation: "The primary cause was the conflict over slavery and states' rights."
      }
    ],
    "Merchant's Ledger": [
      {
        question: "What was the main export crop of the Southern United States before the Civil War?",
        options: ["Tobacco", "Cotton", "Rice", "Sugar"],
        correctAnswer: 1,
        explanation: "Cotton was 'King' in the South, driving the economy and unfortunately, slavery."
      },
      {
        question: "What connected the East and West coasts economically in the 1860s?",
        options: ["Telegraph lines", "Transcontinental Railroad", "Canal system", "Stagecoach routes"],
        correctAnswer: 1,
        explanation: "The Transcontinental Railroad completed in 1869 revolutionized trade and travel."
      },
      {
        question: "What industry boom happened in California in 1849?",
        options: ["Oil drilling", "Gold mining", "Cattle ranching", "Lumber"],
        correctAnswer: 1,
        explanation: "The California Gold Rush of 1849 brought hundreds of thousands of people west."
      }
    ]
  }
};

interface SpookyBookProps {
  country: string;
  path: string;
  onComplete: () => void;
}

const Page = ({ children, ...props }: any) => {
  return (
    <div className="bg-amber-50 p-8 h-full border border-amber-200 shadow-inner" {...props}>
      {children}
    </div>
  );
};

export default function SpookyBook({ country, path, onComplete }: SpookyBookProps) {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [canTurnPage, setCanTurnPage] = useState(false);
  const [answeredPages, setAnsweredPages] = useState<Set<number>>(new Set([0, 1])); // Cover page and first question page are accessible
  const [score, setScore] = useState(0);

  const questions = bookData[country]?.[path] || [];
  const currentQuestion = questions[currentPage - 1]; // Page 1 = Question 0, Page 2 = Question 1, Page 3 = Question 2

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const questionIndex = currentPage - 1;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    setShowExplanation(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Mark this page as answered
      const newAnsweredPages = new Set(answeredPages);
      newAnsweredPages.add(currentPage + 1); // Next page is now accessible
      
      // Update score
      const newScore = score + 1;
      setScore(newScore);
      
      // Check if all questions are completed
      if (newScore === questions.length) {
        // Save progress when all questions are completed
        saveProgress(country, path, newScore);
        // Also unlock the final completion page
        newAnsweredPages.add(questions.length + 1); // Final page
      }
      
      setAnsweredPages(newAnsweredPages);
      setCanTurnPage(true);
    }
  };

  const handleNextPage = () => {
    if (canTurnPage) {
      bookRef.current?.pageFlip().flipNext();
      setSelectedAnswer(null);
      setShowExplanation(false);
      setCanTurnPage(false);
    }
  };

  const onFlip = (e: any) => {
    const newPage = e.data;
    
    // Check if user is trying to go to a page they haven't unlocked
    if (newPage > currentPage && !answeredPages.has(newPage)) {
      // Prevent unauthorized page turns by going back
      setTimeout(() => {
        bookRef.current?.pageFlip().turnToPage(currentPage);
      }, 100);
      return;
    }

    // Allow the page turn
    setCurrentPage(newPage);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

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
        className="shadow-2xl"
        style={{}}
        startPage={0}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        renderOnlyPageLengthChange={false}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* Cover Page */}
        <Page>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-3xl font-bold text-amber-800 mb-4">
              {path}
            </h1>
            <h2 className="text-xl text-amber-700 mb-8">
              {country}
            </h2>
            <p className="text-amber-600 italic">
              Turn the page to begin your journey...
            </p>
          </div>
        </Page>

        {/* Question Pages */}
        {questions.map((question, index) => (
          <Page key={index}>
            <div className="h-full flex flex-col">
              <h3 className="text-lg font-bold text-amber-800 mb-6">
                Question {index + 1}
              </h3>
              
              <p className="text-amber-700 mb-6 leading-relaxed">
                {question.question}
              </p>

              <div className="space-y-3 mb-6">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswerSelect(optionIndex)}
                    className={`w-full p-3 text-left rounded border transition-colors ${
                      selectedAnswer === optionIndex
                        ? 'bg-amber-200 border-amber-400'
                        : 'bg-white border-amber-300 hover:bg-amber-50'
                    }`}
                  >
                    {String.fromCharCode(65 + optionIndex)}. {option}
                  </button>
                ))}
              </div>

              {selectedAnswer !== null && !showExplanation && (
                <button
                  onClick={handleSubmitAnswer}
                  className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
                >
                  Submit Answer
                </button>
              )}

              {showExplanation && (
                <div className={`p-4 rounded ${
                  selectedAnswer === question.correctAnswer
                    ? 'bg-green-100 border border-green-300'
                    : 'bg-red-100 border border-red-300'
                }`}>
                  <p className={`font-bold mb-2 ${
                    selectedAnswer === question.correctAnswer
                      ? 'text-green-800'
                      : 'text-red-800'
                  }`}>
                    {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect!'}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {question.explanation}
                  </p>
                  {selectedAnswer === question.correctAnswer && (
                    <div className="mt-3">
                      <p className="text-green-600 text-sm mb-2 italic">
                        Correct! You may turn the page.
                      </p>
                      <button
                        onClick={handleNextPage}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                      >
                        Turn Page →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Page>
        ))}

        {/* Completion Page */}
        <Page>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Journey Complete!
            </h2>
            <p className="text-amber-700 mb-4">
              You have learned about {country}'s {path.toLowerCase()}.
            </p>
            <div className="bg-amber-100 p-4 rounded-lg mb-6">
              <p className="text-amber-800 font-bold">
                Final Score: {score} / {questions.length}
              </p>
              <p className="text-amber-700 text-sm">
                {score === questions.length ? "Perfect! You are a true scholar!" : 
                 score >= questions.length * 0.7 ? "Well done! You know your history!" :
                 "Keep studying to master this path!"}
              </p>
            </div>
            <button
              onClick={onComplete}
              className="bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700 transition-colors"
            >
              Return to Map
            </button>
          </div>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}