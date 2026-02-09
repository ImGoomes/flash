import type { Flashcard, StudyResult } from "../types";
import { topics } from "../data/flashcards";

interface Props {
  cards: Flashcard[];
  results: StudyResult[];
  onRestart: () => void;
  onRetryMissed: (cards: Flashcard[]) => void;
}

export default function ResultsSummary({
  cards,
  results,
  onRestart,
  onRetryMissed,
}: Props) {
  const knewCount = results.filter((r) => r.knew).length;
  const missedCount = results.length - knewCount;
  const percentage = Math.round((knewCount / results.length) * 100);

  const missedCards = cards.filter(
    (c) => results.find((r) => r.cardId === c.id && !r.knew) !== undefined
  );

  // Group results by topic
  const topicStats = new Map<string, { knew: number; missed: number }>();
  for (const result of results) {
    const card = cards.find((c) => c.id === result.cardId);
    if (!card) continue;
    const stat = topicStats.get(card.topic) || { knew: 0, missed: 0 };
    if (result.knew) stat.knew++;
    else stat.missed++;
    topicStats.set(card.topic, stat);
  }

  const getScoreColor = () => {
    if (percentage >= 80) return "text-emerald-400";
    if (percentage >= 50) return "text-flash-yellow";
    return "text-flash-red";
  };

  const getScoreRingColor = () => {
    if (percentage >= 80) return "stroke-emerald-500";
    if (percentage >= 50) return "stroke-flash-yellow";
    return "stroke-flash-red";
  };

  const getMessage = () => {
    if (percentage === 100) return "Perfect score! You nailed it!";
    if (percentage >= 80) return "Great job! Almost there!";
    if (percentage >= 50) return "Good effort! Keep practicing!";
    return "Keep going! Practice makes perfect!";
  };

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-2xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Score Circle */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative inline-block mb-4 sm:mb-6">
            <svg
              className="w-28 h-28 sm:w-36 sm:h-36 -rotate-90"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-zinc-800"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                className={`${getScoreRingColor()} transition-all duration-1000 ease-out`}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-3xl font-bold ${getScoreColor()}`}>
                {percentage}%
              </span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            {getMessage()}
          </h2>
          <p className="text-zinc-500">
            You knew{" "}
            <span className="text-emerald-400 font-semibold">{knewCount}</span>{" "}
            out of{" "}
            <span className="text-zinc-300 font-semibold">
              {results.length}
            </span>{" "}
            cards
          </p>
        </div>

        {/* Stats Breakdown */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
              {knewCount}
            </div>
            <div className="text-sm text-zinc-500 mt-1">Got It</div>
          </div>
          <div className="bg-flash-red/5 border border-flash-red/20 rounded-xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-flash-red">
              {missedCount}
            </div>
            <div className="text-sm text-zinc-500 mt-1">Still Learning</div>
          </div>
        </div>

        {/* Topic Breakdown */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 mb-8 sm:mb-10">
          <h3 className="text-lg font-semibold mb-4">By Topic</h3>
          <div className="space-y-3">
            {Array.from(topicStats.entries()).map(([topicId, stat]) => {
              const topic = topics.find((t) => t.id === topicId);
              const total = stat.knew + stat.missed;
              const pct = Math.round((stat.knew / total) * 100);
              return (
                <div key={topicId}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-zinc-300">
                      {topic?.icon} {topic?.name}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {stat.knew}/{total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        pct >= 80
                          ? "bg-emerald-500"
                          : pct >= 50
                            ? "bg-flash-yellow"
                            : "bg-flash-red"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {missedCards.length > 0 && (
            <button
              onClick={() => onRetryMissed(missedCards)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-flash-yellow/30 bg-flash-yellow/10 text-flash-yellow hover:bg-flash-yellow/20 transition-all font-medium cursor-pointer"
            >
              Retry Missed ({missedCards.length})
            </button>
          )}
          <button
            onClick={onRestart}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-flash-yellow to-flash-red hover:from-flash-yellow-light hover:to-flash-red-light text-zinc-950 font-medium shadow-lg shadow-flash-yellow/20 transition-all cursor-pointer"
          >
            New Session
          </button>
        </div>
      </div>
    </div>
  );
}
