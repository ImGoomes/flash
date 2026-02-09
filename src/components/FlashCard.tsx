import { useState } from "react";
import type { Flashcard } from "../types";

interface Props {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

const difficultyColors = {
  beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  intermediate: "bg-flash-yellow/10 text-flash-yellow border-flash-yellow/20",
  advanced: "bg-flash-red/10 text-flash-red border-flash-red/20",
};

export default function FlashCard({ card, isFlipped, onFlip }: Props) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    onFlip();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className="w-full cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onClick={handleFlip}
    >
      <div
        className="relative w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-8 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[card.difficulty]}`}
            >
              {card.difficulty}
            </span>
            <span className="text-xs text-zinc-600 font-mono truncate">
              {card.topic}
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-semibold leading-relaxed mb-4 sm:mb-6">
            {card.question}
          </h3>

          {card.codeSnippet && (
            <pre className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm mb-4 sm:mb-6 -mx-1 sm:mx-0">
              <code className="text-zinc-300 font-mono whitespace-pre">
                {card.codeSnippet}
              </code>
            </pre>
          )}

          <div className="flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="hidden sm:inline">Click to reveal answer</span>
            <span className="sm:hidden">Tap to reveal answer</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full bg-zinc-900 border border-flash-yellow/30 rounded-2xl p-5 sm:p-8 shadow-xl shadow-flash-yellow/5 overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-flash-yellow/30 bg-flash-yellow/10 text-flash-yellow">
              Answer
            </span>
          </div>

          <div className="text-sm sm:text-base text-zinc-300 leading-relaxed whitespace-pre-line mb-4 sm:mb-6">
            {card.answer}
          </div>

          {card.codeSnippet &&
            !card.question
              .toLowerCase()
              .includes("what is the time complexity of this") && (
              <pre className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm mb-4 -mx-1 sm:mx-0">
                <code className="text-zinc-300 font-mono whitespace-pre">
                  {card.codeSnippet}
                </code>
              </pre>
            )}

          <div className="flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            <span className="hidden sm:inline">Click to flip back</span>
            <span className="sm:hidden">Tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}
