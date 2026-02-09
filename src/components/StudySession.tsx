import { useState, useEffect, useCallback } from "react";
import type { Flashcard, StudyResult } from "../types";
import FlashCard from "./FlashCard";

interface Props {
  cards: Flashcard[];
  onFinish: (results: StudyResult[]) => void;
  onQuit: () => void;
}

export default function StudySession({ cards, onFinish, onQuit }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [results, setResults] = useState<StudyResult[]>([]);

  const card = cards[currentIndex];
  const progress = (currentIndex / cards.length) * 100;

  const handleKnew = useCallback(
    (knew: boolean) => {
      const newResults = [...results, { cardId: card.id, knew }];
      setResults(newResults);

      if (currentIndex + 1 >= cards.length) {
        onFinish(newResults);
      } else {
        setIsFlipped(false);
        setTimeout(() => setCurrentIndex((i) => i + 1), 100);
      }
    },
    [card, currentIndex, cards.length, results, onFinish]
  );

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setResults((r) => r.slice(0, -1));
      setTimeout(() => setCurrentIndex((i) => i - 1), 100);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.key === "ArrowRight" && isFlipped) {
        handleKnew(true);
      } else if (e.key === "ArrowLeft" && isFlipped) {
        handleKnew(false);
      } else if (e.key === "ArrowLeft" && !isFlipped && currentIndex > 0) {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFlipped, currentIndex, handleKnew, handlePrev]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <button
            onClick={onQuit}
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm flex items-center gap-1.5 cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="hidden sm:inline">Quit</span>
          </button>
          <span className="text-sm text-zinc-500 font-mono">
            {currentIndex + 1} / {cards.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-zinc-800 rounded-full mb-6 sm:mb-10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-flash-yellow to-flash-red rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Card */}
        <div className="mb-6 sm:mb-8">
          <FlashCard
            card={card}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped((f) => !f)}
          />
        </div>

        {/* Action Buttons */}
        {isFlipped && (
          <div className="flex items-center justify-center gap-3 sm:gap-4 animate-fade-in">
            <button
              onClick={() => handleKnew(false)}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-flash-red/30 bg-flash-red/10 text-flash-red hover:bg-flash-red/20 active:bg-flash-red/30 transition-all cursor-pointer text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="hidden sm:inline">Still Learning</span>
              <span className="sm:hidden">Learning</span>
            </button>
            <button
              onClick={() => handleKnew(true)}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 active:bg-emerald-500/30 transition-all cursor-pointer text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Got It
            </button>
          </div>
        )}

        {/* Keyboard Hints — hidden on mobile */}
        <div className="hidden sm:flex justify-center mt-8 gap-6">
          <div className="flex items-center gap-1.5 text-xs text-zinc-600">
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-500 font-mono">
              Space
            </kbd>
            Flip
          </div>
          {isFlipped ? (
            <>
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-500 font-mono">
                  &larr;
                </kbd>
                Still Learning
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-500 font-mono">
                  &rarr;
                </kbd>
                Got It
              </div>
            </>
          ) : (
            currentIndex > 0 && (
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-500 font-mono">
                  &larr;
                </kbd>
                Previous
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
