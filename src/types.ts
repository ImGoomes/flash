export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  codeSnippet?: string;
  language?: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  topic: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  cardCount: number;
}

export type AppScreen = "select" | "study" | "results";

export interface StudyResult {
  cardId: string;
  knew: boolean;
}
