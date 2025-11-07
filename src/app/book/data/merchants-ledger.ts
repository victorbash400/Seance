import { Question } from "../types";

/**
 * MERCHANT'S LEDGER
 * =================
 * Economic history, trade, industry, commerce, and financial systems.
 * Focus on major industries, trade routes, economic booms/busts, and business practices.
 * 
 * AVAILABLE COUNTRIES:
 * United States, Canada, Brazil, United Kingdom, France, Germany, Russia, China,
 * India, Australia, Japan, Egypt, South Africa, Mexico, Argentina, Nigeria,
 * Saudi Arabia, Indonesia, Kenya
 * 
 * Add 5-10 questions per country about economic and trade history.
 */

export const merchantsLedger: Record<string, Question[]> = {
  "United States": [
    {
      question: "What was the main export crop of the Southern United States before the Civil War?",
      options: ["Tobacco", "Cotton", "Rice", "Sugar"],
      correctAnswer: 1,
      explanation: "Cotton was 'King' in the South, driving the economy and unfortunately, slavery."
    },
    {
      question: "What connected the East and West coasts economically in the 1860s?",
      options: ["Telegraph lines", "Transcontinental Railroad", "Canal system", "Stagecoach routes"],
      correctAnswer: 1,
      explanation: "The Transcontinental Railroad completed in 1869 revolutionized trade and travel."
    },
    {
      question: "What industry boom happened in California in 1849?",
      options: ["Oil drilling", "Gold mining", "Cattle ranching", "Lumber"],
      correctAnswer: 1,
      explanation: "The California Gold Rush of 1849 brought hundreds of thousands of people west."
    }
  ]
};
