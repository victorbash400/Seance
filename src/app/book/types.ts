export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface BookData {
  [country: string]: {
    [path: string]: Question[];
  };
}