import React, { createContext, useState } from "react";

const quizContext = createContext({
  totalQuestions: 0,
  setTotalQuestions: () => { },
  currentQuestion: 0,
  setCurrentQuestion: () => 0,
  currentScore: 0,
  setCurrentScore: () => 0,
  noOfQuestionAttempted: 0,
  setnoOfQuestionAttempted: () => 0,
  noOfWrongAnswers: 0,
  noOfRightAnswers: 0,
  setNoOfWrongAnswers: () => {},
  setNoOfRightAnswers: () => {}
});

const QuizProvider = ({ children }) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [noOfQuestionAttempted, setnoOfQuestionAttempted] = useState(0);
  const [noOfWrongAnswers, setNoOfWrongAnswers] = useState(0);
  const [noOfRightAnswers, setNoOfRightAnswers] = useState(0);

  const [quizData, setQuizData] = useState({
    currentQuestion: 0,
    totalQuestions: 0,
    currentScore: 0,
    noOfQuestionAttempted: 0,
    noOfWrongAnswers: 0,
    noOfRightAnswers: 0
  })

  const resetQuizData = () => {
    console.log('sds')
    setQuizData({
      currentQuestion: 0,
      totalQuestions: 0,
      currentScore: 0,
      noOfQuestionAttempted: 0,
      noOfWrongAnswers: 0,
      noOfRightAnswers: 0
    })
  }

  return (
    <quizContext.Provider
      value={{
        totalQuestions,
        setTotalQuestions,
        currentQuestion,
        setCurrentQuestion,
        currentScore,
        setCurrentScore,
        noOfQuestionAttempted,
        setnoOfQuestionAttempted,
        noOfRightAnswers,
        noOfWrongAnswers,
        setNoOfRightAnswers,
        setNoOfWrongAnswers,
        resetQuizData
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export { quizContext, QuizProvider };
