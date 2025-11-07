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
  const [totalPages, setTotalPages] = useState(0);
  const [bookState, setBookState] = useState<string>('read');
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



  const onFlip = useCallback((e: any) => {
    const newPage = e.data;
    
    // Check if user is trying to go to a page they haven't unlocked
    if (newPage > currentPage && !answeredPages.has(newPage)) {
      // Prevent unauthorized page turns by going back
      setTimeout(() => {
        bookRef.current?.turnToPage(currentPage);
      }, 100);
      return;
    }

    // Play page flip sound
    const audio = new Audio('/sound/pageflip.mp3');
    audio.volume = 0.5;
    audio.play().catch(err => console.log('Audio play failed:', err));

    // Allow the page turn
    setCurrentPage(newPage);
  }, [currentPage, answeredPages]);

  const onChangeState = useCallback((e: any) => {
    setBookState(e.data);
  }, []);

  const onInit = useCallback((e: any) => {
    setTotalPages(bookRef.current?.pageFlip()?.getPageCount() || 0);
  }, []);

  const handlePrevPage = useCallback(() => {
    bookRef.current?.pageFlip()?.flipPrev();
  }, []);

  const handleNextPage = useCallback(() => {
    bookRef.current?.pageFlip()?.flipNext();
  }, []);

  return (
    <div className="relative">
      {/* Return to Realm button */}
      <button
        onClick={() => {
          const clickSound = new Audio('/sound/click.mp3');
          clickSound.volume = 0.5;
          clickSound.play().catch(err => console.log('Click sound failed:', err));
          window.location.href = '/';
        }}
        className="absolute top-6 left-6 z-50 px-4 py-2 rounded-md bg-gradient-to-r from-red-700 to-black border border-red-800 text-red-200 font-serif hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] paint-font"
        style={{
          textShadow: "0 0 10px rgba(255, 50, 50, 0.8)",
        }}
      >
        ← Return to the Realm
      </button>

      {/* Book UI Controls */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg flex items-center gap-4 paint-font">
          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Progress:</span>
            <div className="w-32 bg-gray-600 rounded-full h-2">
              <div 
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(score / questions.length) * 100}%` }}
              />
            </div>
            <span className="text-sm">{score}/{questions.length}</span>
          </div>
          
          {/* Page Counter */}
          <div className="text-sm">
            Page {currentPage + 1} of {totalPages}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevPage}
        disabled={currentPage <= 0}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed paint-font"
      >
        ←
      </button>
      
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages - 1}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed paint-font"
      >
        →
      </button>

      {/* Book State Indicator */}
      {bookState === 'flipping' && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
            <span className="paint-font">Turning page...</span>
          </div>
        </div>
      )}

    <FlipBook 
      ref={bookRef} 
      onFlip={onFlip}
      onChangeState={onChangeState}
      onInit={onInit}
      className="book-shadow"
    >
      {/* Cover Page */}
      <Page data-density="hard" className="!border-0">
        <div 
          className="h-full bg-amber-200 bg-cover bg-center bg-no-repeat flex flex-col text-center"
          style={{
            backgroundImage: "url('/book-cover.png'), url('/book-cover.jpg')",
          }}
        >
          {/* Top section - People's Tales */}
          <div className="pt-8">
            <h1 className="text-4xl font-bold text-white mb-4 paint-font page-title">
              {path}
            </h1>
          </div>
          
          {/* Middle section - Country (larger) */}
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-6xl font-bold text-white paint-font">
              {country}
            </h2>
          </div>
          
          {/* Bottom section - Turn page text */}
          <div className="pb-8">
            <p className="text-white paint-font">
              Turn the page to begin your journey...
            </p>
          </div>
        </div>
      </Page>

      {/* Inside Cover */}
      <Page data-density="hard">
        <div 
          className="h-full bg-amber-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/book-cover.png'), url('/book-cover.jpg')",
          }}
        />
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
              <h3 className="text-lg font-bold text-amber-800 mb-6 paint-font page-title">
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

                  // Compose spooky classes
                  const base = 'w-full p-3 text-left rounded border transition-colors spooky-option paint-font';
                  let stateClasses = '';

                  if (isAnswered) {
                    if (wasSelected && isCorrectAnswer) {
                      stateClasses = 'spooky-correct border-green-400';
                    } else if (wasSelected) {
                      stateClasses = 'spooky-wrong border-red-400';
                    } else if (isCorrectAnswer) {
                      stateClasses = 'spooky-correct border-green-300';
                    } else {
                      stateClasses = 'bg-gray-800/10 border-gray-600 text-gray-300';
                    }
                  } else if (!canInteract) {
                    stateClasses = 'bg-gray-800/5 border-gray-700 text-gray-400 cursor-not-allowed';
                  } else if (currentSelected === optionIndex) {
                    stateClasses = 'bg-amber-600/10 border-amber-400 text-amber-300';
                  } else {
                    stateClasses = 'bg-[#0b0b0b] border-amber-300 hover:shadow-[0_10px_30px_rgba(255,140,0,0.08)] hover:scale-[1.01] text-amber-100';
                  }

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => canInteract ? handleAnswerSelect(index, optionIndex) : null}
                      disabled={!canInteract}
                      className={`${base} ${stateClasses}`}
                    >
                      <span className="mr-3 font-bold text-lg">{String.fromCharCode(65 + optionIndex)}</span>
                      <span>{option}</span>
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
                            onClick={() => {
                              if (canTurnPage) {
                                bookRef.current?.flipNext();
                                setCanTurnPage(false);
                              }
                            }}
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
          <h2 className="text-2xl font-bold text-amber-800 mb-4 paint-font">
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
    </div>
  );
}
