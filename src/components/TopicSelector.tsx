import { useState } from "react";
import { topics } from "../data/flashcards";

interface Props {
  onStart: (selectedTopics: string[], cardCount: number) => void;
}

export default function TopicSelector({ onStart }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [cardCount, setCardCount] = useState(10);

  const totalAvailable = topics
    .filter((t) => selected.has(t.id))
    .reduce((sum, t) => sum + t.cardCount, 0);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === topics.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(topics.map((t) => t.id)));
    }
  };

  const canStart = selected.size > 0 && cardCount > 0 && totalAvailable > 0;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3 bg-gradient-to-r from-flash-yellow to-flash-red bg-clip-text text-transparent">
            Flash
          </h1>
          <p className="text-zinc-400 text-sm sm:text-lg">
            Study CS topics with interactive flashcards
          </p>
        </div>

        {/* Topic Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Choose Topics</h2>
            <button
              onClick={selectAll}
              className="text-sm text-flash-yellow hover:text-flash-yellow-light transition-colors cursor-pointer"
            >
              {selected.size === topics.length ? "Deselect All" : "Select All"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic) => {
              const isSelected = selected.has(topic.id);
              return (
                <button
                  key={topic.id}
                  onClick={() => toggle(topic.id)}
                  className={`group relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-flash-yellow/50 bg-flash-yellow/5 shadow-lg shadow-flash-yellow/5"
                      : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{topic.name}</div>
                      <div className="text-xs text-zinc-500 mt-0.5 truncate">
                        {topic.description}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-600">
                        {topic.cardCount}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-flash-yellow border-flash-yellow"
                            : "border-zinc-700 group-hover:border-zinc-500"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="w-3 h-3 text-zinc-950"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Count */}
        <div className="mb-8 sm:mb-10 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6">
          <h2 className="text-xl font-semibold mb-4">Number of Cards</h2>
          <div className="flex items-center gap-3 sm:gap-6">
            <input
              type="range"
              min={1}
              max={Math.max(totalAvailable, 1)}
              value={Math.min(cardCount, totalAvailable || 1)}
              onChange={(e) => setCardCount(Number(e.target.value))}
              className="flex-1 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              disabled={totalAvailable === 0}
            />
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                max={totalAvailable || 1}
                value={Math.min(cardCount, totalAvailable || 1)}
                onChange={(e) =>
                  setCardCount(
                    Math.max(
                      1,
                      Math.min(Number(e.target.value), totalAvailable)
                    )
                  )
                }
                className="w-16 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-center text-sm focus:outline-none focus:border-flash-yellow"
                disabled={totalAvailable === 0}
              />
              <span className="text-sm text-zinc-500">/ {totalAvailable}</span>
            </div>
          </div>
          {selected.size > 0 && (
            <p className="text-xs text-zinc-500 mt-3">
              {selected.size} topic{selected.size !== 1 && "s"} selected
              &middot; {totalAvailable} cards available
            </p>
          )}
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={() =>
              onStart(
                Array.from(selected),
                Math.min(cardCount, totalAvailable)
              )
            }
            disabled={!canStart}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 cursor-pointer ${
              canStart
                ? "bg-gradient-to-r from-flash-yellow to-flash-red hover:from-flash-yellow-light hover:to-flash-red-light text-zinc-950 shadow-lg shadow-flash-yellow/20 hover:shadow-flash-yellow/35"
                : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
            }`}
          >
            Start Studying
          </button>
        </div>
      </div>
    </div>
  );
}
