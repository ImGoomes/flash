import { useState, useCallback } from "react";
import type { AppScreen, Flashcard, StudyResult } from "./types";
import { flashcards } from "./data/flashcards";
import TopicSelector from "./components/TopicSelector";
import StudySession from "./components/StudySession";
import ResultsSummary from "./components/ResultsSummary";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("select");
  const [studyCards, setStudyCards] = useState<Flashcard[]>([]);
  const [results, setResults] = useState<StudyResult[]>([]);

  const handleStart = useCallback(
    (selectedTopics: string[], cardCount: number) => {
      const pool = flashcards.filter((c) => selectedTopics.includes(c.topic));
      const selected = shuffle(pool).slice(0, cardCount);
      setStudyCards(selected);
      setResults([]);
      setScreen("study");
    },
    []
  );

  const handleFinish = useCallback((newResults: StudyResult[]) => {
    setResults(newResults);
    setScreen("results");
  }, []);

  const handleRetryMissed = useCallback((missed: Flashcard[]) => {
    setStudyCards(shuffle(missed));
    setResults([]);
    setScreen("study");
  }, []);

  const handleRestart = useCallback(() => {
    setScreen("select");
    setStudyCards([]);
    setResults([]);
  }, []);

  switch (screen) {
    case "select":
      return <TopicSelector onStart={handleStart} />;
    case "study":
      return (
        <StudySession
          cards={studyCards}
          onFinish={handleFinish}
          onQuit={handleRestart}
        />
      );
    case "results":
      return (
        <ResultsSummary
          cards={studyCards}
          results={results}
          onRestart={handleRestart}
          onRetryMissed={handleRetryMissed}
        />
      );
  }
}
