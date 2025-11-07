import { Question } from "../types";

/**
 * CROWN'S SECRETS
 * ===============
 * Political history, rulers, wars, government systems, and power struggles.
 * Focus on kings, queens, presidents, battles, revolutions, and political movements.
 * 
 * AVAILABLE COUNTRIES:
 * United States, Canada, Brazil, United Kingdom, France, Germany, Russia, China,
 * India, Australia, Japan, Egypt, South Africa, Mexico, Argentina, Nigeria,
 * Saudi Arabia, Indonesia, Kenya
 * 
 * Add 5-10 questions per country about political history and leadership.
 */

export const crownsSecrets: Record<string, Question[]> = {
  "United States": [
    {
      question: "Which war established the United States as an independent nation?",
      options: ["Civil War", "War of 1812", "Revolutionary War", "French and Indian War"],
      correctAnswer: 2,
      explanation: "The Revolutionary War (1775-1783) won independence from Britain."
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
      correctAnswer: 3,
      explanation: "George Washington served as the first President from 1789 to 1797."
    },
    {
      question: "What was the main cause of the American Civil War?",
      options: ["Taxation", "Slavery", "Trade disputes", "Religious differences"],
      correctAnswer: 1,
      explanation: "The primary cause was the conflict over slavery and states' rights."
    }
  ]
};
