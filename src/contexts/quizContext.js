import React, { createContext, useState } from "react";

const quizContext = createContext({
  userResponse: {},
  setUserResponse: () => { },

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
  const [userResponse, setUserResponse] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [noOfQuestionAttempted, setnoOfQuestionAttempted] = useState(0);
  const [noOfWrongAnswers, setNoOfWrongAnswers] = useState(0);
  const [noOfRightAnswers, setNoOfRightAnswers] = useState(0);

  // console.log(userResponse)


  return (
    <quizContext.Provider
      value={{
        userResponse,
        setUserResponse,


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
        setNoOfWrongAnswers
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export { quizContext, QuizProvider };
