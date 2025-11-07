"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { FlipBook, Page, FlipBookRef } from "../../components/FlipBook";
import { Question } from "../types";
import { saveProgress } from "../../lib/progressTracker";

interface QuestionBookProps {
  country: string;
  path: string;
  questions: Question[];
  onComplete: () => void;
}

export default function QuestionBook({
  country,
  path,
  questions,
  onComplete,
}: QuestionBookProps) {
  const bookRef = useRef<FlipBookRef>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [bookState, setBookState] = useState<string>("read");
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});
  const [showExplanations, setShowExplanations] = useState<{
    [key: number]: boolean;
  }>({});
  const [canTurnPage, setCanTurnPage] = useState(false);
  const [answeredPages, setAnsweredPages] = useState<Set<number>>(
    new Set([0, 1, 2]),
  ); // Cover, inside cover, and first question are accessible
  const [score, setScore] = useState(0);
  const [showLockedPopup, setShowLockedPopup] = useState(false);
  const [showResetMessage, setShowResetMessage] = useState(false);

  const handleAnswerSelect = useCallback(
    (questionIndex: number, answerIndex: number) => {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: answerIndex,
      }));
    },
    [],
  );

  const handleResetToStart = useCallback(() => {
    // Flip back page by page for dramatic effect
    const flipBackInterval = setInterval(() => {
      const pageFlip = bookRef.current?.pageFlip();
      if (pageFlip) {
        const currentPageNum = pageFlip.getCurrentPageIndex();
        if (currentPageNum > 0) {
          pageFlip.flipPrev();
        } else {
          clearInterval(flipBackInterval);
          // Reset all state after reaching the beginning
          setTimeout(() => {
            setAnswers([]);
            setSelectedAnswers({});
            setShowExplanations({});
            setCanTurnPage(false);
            setAnsweredPages(new Set([0, 1, 2]));
            setScore(0);
          }, 500);
        }
      }
    }, 300); // Flip every 300ms for smooth animation
  }, []);

  const handleSubmitAnswer = useCallback(
    (questionIndex: number) => {
      const selectedAnswer = selectedAnswers[questionIndex];
      if (selectedAnswer === null || selectedAnswer === undefined) return;

      const currentQuestion = questions[questionIndex];
      if (!currentQuestion) return; // Guard against invalid question index

      const newAnswers = [...answers];
      newAnswers[questionIndex] = selectedAnswer;
      setAnswers(newAnswers);

      setShowExplanations((prev) => ({
        ...prev,
        [questionIndex]: true,
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
      } else {
        // Wrong answer - show message and reset
        setShowResetMessage(true);
        setTimeout(() => {
          setShowResetMessage(false);
          handleResetToStart();
        }, 2000); // Show message for 2 seconds before flipping back
      }
    },
    [
      selectedAnswers,
      questions,
      currentPage,
      answeredPages,
      answers,
      score,
      country,
      path,
      handleResetToStart,
    ],
  );

  const onFlip = useCallback(
    (e: any) => {
      const newPage = e.data;

      // Check if user is trying to go to a page they haven't unlocked
      if (newPage > currentPage && !answeredPages.has(newPage)) {
        // Show spooky popup
        setShowLockedPopup(true);
        setTimeout(() => setShowLockedPopup(false), 3000);

        // Prevent unauthorized page turns by going back
        setTimeout(() => {
          bookRef.current?.turnToPage(currentPage);
        }, 100);
        return;
      }

      // Play page flip sound
      const audio = new Audio("/sound/pageflip.mp3");
      audio.volume = 0.5;
      audio.play().catch((err) => console.log("Audio play failed:", err));

      // Allow the page turn
      setCurrentPage(newPage);
    },
    [currentPage, answeredPages],
  );

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
      {/* Locked Page Popup */}
      {showLockedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-black/90 border-4 border-red-600 rounded-lg p-8 max-w-md mx-4 shadow-[0_0_50px_rgba(255,0,0,0.8)] animate-pulse pointer-events-auto">
            <h3 className="text-2xl font-bold text-red-500 mb-4 paint-font text-center">
              The Path is Sealed!
            </h3>
            <p className="text-red-300 text-center font-serif italic leading-relaxed">
              "The spirits bar your way, traveler...
              <br />
              Your answer was not true.
              <br />
              Choose wisely, change your fate,
              <br />
              Or forever here you'll wait."
            </p>
          </div>
        </div>
      )}

      {/* Reset Message Overlay */}
      {showResetMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gradient-to-b from-red-900 to-black border-4 border-red-600 rounded-lg p-8 max-w-md mx-4 shadow-[0_0_50px_rgba(255,0,0,0.9)] animate-pulse">
            <h3 className="text-3xl font-bold text-red-400 mb-4 paint-font text-center">
              WRONG!
            </h3>
            <p className="text-red-200 text-center font-serif italic leading-relaxed text-lg">
              "The spirits reject your answer...
              <br />
              The pages turn back in time...
              <br />
              Begin again, mortal."
            </p>
          </div>
        </div>
      )}

      {/* Return to Realm button */}
      <button
        onClick={() => {
          const clickSound = new Audio("/sound/click.mp3");
          clickSound.volume = 0.5;
          clickSound
            .play()
            .catch((err) => console.log("Click sound failed:", err));
          window.location.href = "/";
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
            <span className="text-sm">
              {score}/{questions.length}
            </span>
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
      {bookState === "flipping" && (
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
                <h3 className="text-sm font-bold text-amber-800 mb-3 paint-font">
                  Q{index + 1}
                  {isAnswered && " ✓"}
                </h3>

                <p className="text-amber-700 mb-4 text-sm leading-snug">
                  {question.question}
                </p>

                <div className="space-y-2 mb-4">
                  {question.options.map((option, optionIndex) => {
                    const isCorrectAnswer =
                      optionIndex === question.correctAnswer;
                    const wasSelected = answers[index] === optionIndex;
                    const currentSelected = selectedAnswers[index];
                    const isWrongAnswer = isAnswered && !isCorrectAnswer;

                    // Compose spooky classes
                    const base =
                      "w-full p-2 text-left rounded border transition-colors spooky-option paint-font text-sm relative";
                    let stateClasses = "";

                    if (isAnswered) {
                      if (wasSelected && isCorrectAnswer) {
                        stateClasses =
                          "spooky-correct border-green-400 bg-green-50";
                      } else if (wasSelected) {
                        stateClasses = "spooky-wrong border-red-400 bg-red-50";
                      } else if (isCorrectAnswer) {
                        stateClasses =
                          "spooky-correct border-green-300 bg-green-50";
                      } else {
                        stateClasses =
                          "bg-gray-100 border-red-600 text-red-600";
                      }
                    } else if (!canInteract) {
                      stateClasses =
                        "bg-gray-800/5 border-gray-700 text-gray-400 cursor-not-allowed";
                    } else if (currentSelected === optionIndex) {
                      stateClasses =
                        "bg-amber-200 border-amber-600 text-amber-900 font-bold shadow-lg";
                    } else {
                      stateClasses =
                        "bg-amber-50 border-amber-300 hover:bg-amber-100 hover:border-amber-500 text-amber-900";
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() =>
                          canInteract && !isAnswered
                            ? handleAnswerSelect(index, optionIndex)
                            : null
                        }
                        disabled={!canInteract || isAnswered}
                        className={`${base} ${stateClasses}`}
                        style={
                          isAnswered && !isCorrectAnswer && !wasSelected
                            ? {
                                textDecoration: "line-through",
                                textDecorationColor: "#dc2626",
                                textDecorationThickness: "2px",
                              }
                            : undefined
                        }
                      >
                        <span className="mr-3 font-bold text-lg">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>

                {canInteract &&
                  selectedAnswers[index] !== null &&
                  selectedAnswers[index] !== undefined &&
                  !showExplanations[index] && (
                    <button
                      onClick={() => handleSubmitAnswer(index)}
                      className="bg-amber-600 text-white px-4 py-1.5 text-sm rounded hover:bg-amber-700 transition-colors"
                    >
                      Submit
                    </button>
                  )}

                {canInteract && showExplanations[index] && (
                  <div
                    className={`p-3 rounded text-sm ${
                      selectedAnswers[index] === question.correctAnswer
                        ? "bg-green-100 border border-green-300"
                        : "bg-red-100 border border-red-300"
                    }`}
                  >
                    <p
                      className={`font-bold mb-1 ${
                        selectedAnswers[index] === question.correctAnswer
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {selectedAnswers[index] === question.correctAnswer
                        ? "Correct!"
                        : "Incorrect!"}
                    </p>
                    <p className="text-gray-700 text-xs">
                      {question.explanation}
                    </p>
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <div className="mt-2">
                        {canTurnPage ? (
                          <>
                            <p className="text-green-600 text-xs mb-1 italic">
                              You may turn the page.
                            </p>
                            <button
                              onClick={() => {
                                if (canTurnPage) {
                                  bookRef.current?.flipNext();
                                  setCanTurnPage(false);
                                }
                              }}
                              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-xs"
                            >
                              Turn Page →
                            </button>
                          </>
                        ) : (
                          <p className="text-green-600 text-xs italic">
                            Continue with next question.
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="mt-2">
                        <p className="text-red-600 text-xs italic animate-pulse">
                          The spirits reject your answer... Returning to the
                          beginning...
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {isAnswered && !canInteract && (
                  <div className="p-2 rounded bg-gray-50 border border-gray-200">
                    <p className="text-gray-600 text-xs italic">
                      {answers[index] === question.correctAnswer
                        ? "✓ Correct"
                        : "✗ Incorrect"}
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
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4 paint-font">
              Journey Complete!
            </h2>

            {/* Show happy monster for perfect score */}
            {score === questions.length && (
              <div className="mb-4">
                <Image
                  src="/gif/happy-monster.gif"
                  alt="Celebrating Monster"
                  width={200}
                  height={200}
                  className="object-contain"
                  unoptimized
                />
              </div>
            )}

            <p className="text-amber-700 mb-4">
              You have learned about {country}'s {path.toLowerCase()}.
            </p>
            <div className="bg-amber-100 p-4 rounded-lg mb-6">
              <p className="text-amber-800 font-bold">
                Final Score: {score} / {questions.length}
              </p>
              <p className="text-amber-700 text-sm">
                {score === questions.length
                  ? "Perfect! You are a true scholar!"
                  : score >= questions.length * 0.7
                    ? "Well done! You know your history!"
                    : "Keep studying to master this path!"}
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
