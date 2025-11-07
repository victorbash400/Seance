import { Question } from "../types";

/**
 * PEOPLE'S TALES
 * ==============
 * Stories about common people, daily life, folklore, traditions, and cultural practices.
 * Focus on how ordinary citizens lived, worked, and celebrated throughout history.
 * 
 * AVAILABLE COUNTRIES:
 * United States, Canada, Brazil, United Kingdom, France, Germany, Russia, China,
 * India, Australia, Japan, Egypt, South Africa, Mexico, Argentina, Nigeria,
 * Saudi Arabia, Indonesia, Kenya
 * 
 * Add 5-10 questions per country about daily life, traditions, and folk culture.
 */

export const peoplesTales: Record<string, Question[]> = {
  "United States": [
    {
      question: "What was the main reason families moved west during the 1800s?",
      options: ["Gold rush", "Free land", "Religious freedom", "All of the above"],
      correctAnswer: 3,
      explanation: "Families moved west for gold, free land through the Homestead Act, and religious freedom."
    },
    {
      question: "What did most American families eat for breakfast in the 1800s?",
      options: ["Cereal and milk", "Bread and butter", "Eggs and bacon", "Porridge and molasses"],
      correctAnswer: 3,
      explanation: "Most families ate simple porridge with molasses, as it was cheap and filling."
    },
    {
      question: "How did most people travel between cities in the early 1800s?",
      options: ["By train", "By horse and wagon", "By boat", "On foot"],
      correctAnswer: 1,
      explanation: "Horse-drawn wagons were the primary means of land transportation before railroads expanded."
    }
  ]
};
