/*
  This file contains the data for the quiz.
  The data is in the form of an array of objects.
  Each object represents a topic.
  Each topic has an array of question objects.
  Each question object has a question, imageUrl, an array of answers and the correct answer.
*/

export const DATA = [
  {
    topic: "Christmas ...",
    questions: [
      {
        question: "What is the name of the snowman in Frozen?",
        imageUrl: "...",
        answers: ["Olaf", "Sven", "Kristoff", "Hans"],
        correctAnswer: "Olaf",
      },
      {
        question: "Next question?",
        answers: ["1 answer", "2 answer", "3 answer", "4 answer"],
        correctAnswer: "2 answer",
      },
    ],
  },
  {
    topic: "Christmas Movies",
    questions: [
      {
        question: "....",
        answers: ["...", "...", "...", "..."],
        correctAnswer: "....",
      },
    ],
  },
];