"use client";

import { useState, useRef, useCallback } from "react";
import { FlipBook, Page, FlipBookRef } from "../../components/FlipBook";
import { Question } from "../types";
import { saveProgress } from "../../lib/progressTracker";

interface QuestionBookProps {
  country: string;
  path: string;
  questions: Question[];
  onComplete: () => void;
}

export default function QuestionBook({ country, path, questions, onComplete }: QuestionBookProps) {
  const bookRef = useRef<FlipBookRef>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number | null}>({});
  const [showExplanations, setShowExplanations] = useState<{[key: number]: boolean}>({});
  const [canTurnPage, setCanTurnPage] = useState(false);
  const [answeredPages, setAnsweredPages] = useState<Set<number>>(new Set([0, 1, 2])); // Cover, inside cover, and first question are accessible
  const [score, setScore] = useState(0);

  const handleAnswerSelect = useCallback((questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  }, []);

  const handleSubmitAnswer = useCallback((questionIndex: number) => {
    const selectedAnswer = selectedAnswers[questionIndex];
    if (selectedAnswer === null || selectedAnswer === undefined) return;

    const currentQuestion = questions[questionIndex];
    if (!currentQuestion) return; // Guard against invalid question index

    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    
    setShowExplanations(prev => ({
      ...prev,
      [questionIndex]: true
    }));

    if (selectedAnswer === currentQuestion.correctAnswer) {
      const newAnsweredPages = new Set(answeredPages);
      
      // Update score
      const newScore = score + 1;
      setScore(newScore);
      
      // Determine if we're on left or right side of spread
      const isRightSide = currentPage % 2 === 1; // Odd pages are right side
      const isLeftSide = currentPage % 2 === 0 && currentPage > 0; // Even pages (except 0) are left side
      
      if (isLeftSide) {
        // On left side: just unlock the right side of same spread, no page turn needed
        newAnsweredPages.add(currentPage + 1);
        setCanTurnPage(false); // Don't show turn page button
      } else if (isRightSide) {
        // On right side: unlock next spread and allow page turn
        newAnsweredPages.add(currentPage + 1);
        newAnsweredPages.add(currentPage + 2);
        setCanTurnPage(true); // Show turn page button
      }
      
      // Check if all questions are completed
      if (newScore === questions.length) {
        // Save progress when all questions are completed
        saveProgress(country, path, newScore);
        // Unlock all remaining pages including completion page
        const totalPages = questions.length + 4; // Rough estimate
        for (let i = currentPage; i <= totalPages; i++) {
          newAnsweredPages.add(i);
        }
        setCanTurnPage(true); // Allow turning to completion page
      }
      
      setAnsweredPages(newAnsweredPages);
      setScore(newScore);
    }
  }, [selectedAnswers, questions, currentPage, answeredPages, answers, score, country, path]);

  const handleNextPage = useCallback(() => {
    if (canTurnPage) {
      bookRef.current?.flipNext();
      setCanTurnPage(false);
    }
  }, [canTurnPage]);

  const onFlip = useCallback((e: any) => {
    const newPage = e.data;

    console.log('onFlip event triggered');
    console.log('Current Page:', currentPage);
    console.log('New Page:', newPage);
    console.log('Answered Pages:', answeredPages);
    
    // Check if user is trying to go to a page they haven't unlocked
    if (newPage > currentPage && !answeredPages.has(newPage)) {
      // Prevent unauthorized page turns by going back
      console.log('Page turn rejected: New page has not been unlocked.');
      setTimeout(() => {
        bookRef.current?.turnToPage(currentPage);
      }, 100);
      return;
    }

    console.log('Page turn allowed.');
    // Allow the page turn
    setCurrentPage(newPage);
  }, [currentPage, answeredPages]);

  return (
    <FlipBook ref={bookRef} onFlip={onFlip}>
      {/* Cover Page */}
      <Page data-density="hard">
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

      {/* Inside Cover */}
      <Page data-density="hard">
        <div className="bg-amber-100 h-full"></div>
      </Page>

      {/* Question Pages */}
      {questions.map((question, index) => {
        const isAnswered = answers[index] !== undefined;
        const nextQuestionIndex = answers.length; // Index of next unanswered question
        const canInteract = index === nextQuestionIndex; // Only next question is interactive
        const questionPageNumber = index + 2; // Questions start at page 2
        
        return (
          <Page key={index}>
            <div className="h-full flex flex-col">
              <h3 className="text-lg font-bold text-amber-800 mb-6">
                Question {index + 1}
                {isAnswered && ' ✓'}
                {canInteract && ' (Active)'}
              </h3>
              
              <p className="text-amber-700 mb-6 leading-relaxed">
                {question.question}
              </p>

              <div className="space-y-3 mb-6">
                {question.options.map((option, optionIndex) => {
                  const isCorrectAnswer = optionIndex === question.correctAnswer;
                  const wasSelected = answers[index] === optionIndex;
                  const currentSelected = selectedAnswers[index];
                  
                  return (
                    <button
                      key={optionIndex}
                      onClick={() => canInteract ? handleAnswerSelect(index, optionIndex) : null}
                      disabled={!canInteract}
                      className={`w-full p-3 text-left rounded border transition-colors ${
                        isAnswered
                          ? wasSelected && isCorrectAnswer
                            ? 'bg-green-100 border-green-400 text-green-800' // Correct answer
                            : wasSelected
                            ? 'bg-red-100 border-red-400 text-red-800' // Wrong answer selected
                            : isCorrectAnswer
                            ? 'bg-green-50 border-green-300 text-green-700' // Correct answer (not selected)
                            : 'bg-gray-100 border-gray-300 text-gray-500' // Other options
                          : !canInteract
                          ? 'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed'
                          : currentSelected === optionIndex
                          ? 'bg-amber-200 border-amber-400'
                          : 'bg-white border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>
                  );
                })}
              </div>

              {canInteract && selectedAnswers[index] !== null && selectedAnswers[index] !== undefined && !showExplanations[index] && (
                <button
                  onClick={() => handleSubmitAnswer(index)}
                  className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
                >
                  Submit Answer
                </button>
              )}

              {canInteract && showExplanations[index] && (
                <div className={`p-4 rounded ${
                  selectedAnswers[index] === question.correctAnswer
                    ? 'bg-green-100 border border-green-300'
                    : 'bg-red-100 border border-red-300'
                }`}>
                  <p className={`font-bold mb-2 ${
                    selectedAnswers[index] === question.correctAnswer
                      ? 'text-green-800'
                      : 'text-red-800'
                  }`}>
                    {selectedAnswers[index] === question.correctAnswer ? 'Correct!' : 'Incorrect!'}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {question.explanation}
                  </p>
                  {selectedAnswers[index] === question.correctAnswer && (
                    <div className="mt-3">
                      {canTurnPage ? (
                        <>
                          <p className="text-green-600 text-sm mb-2 italic">
                            Correct! You may turn the page.
                          </p>
                          <button
                            onClick={handleNextPage}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                          >
                            Turn Page →
                          </button>
                        </>
                      ) : (
                        <p className="text-green-600 text-sm italic">
                          Correct! Continue with the next question on this spread.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {isAnswered && !canInteract && (
                <div className="p-4 rounded bg-gray-50 border border-gray-200">
                  <p className="text-gray-600 text-sm italic">
                    Question completed. {answers[index] === question.correctAnswer ? 'Correct!' : 'Incorrect.'}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          </Page>
        );
      })}

      {/* Inside Back Cover */}
      <Page data-density="hard">
        <div className="bg-amber-100 h-full"></div>
      </Page>

      {/* Completion Page */}
      <Page data-density="hard">
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
    </FlipBook>
  );
}
