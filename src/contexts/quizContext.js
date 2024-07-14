import React, { createContext, useState } from "react";

const quizContext = createContext({
  userResponse: {},
  setUserResponse: () => { }
  
});

const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [userResponse, setUserResponse] = useState({});



  const updateContext = (newState) => {
    setCurrentQuestion(newState.currentQuestion || currentQuestion);
    setCurrentQuestionNumber(newState.currentQuestionNumber || currentQuestionNumber);
    setIsCurrentQuestionAnswered(newState.isCurrentQuestionAnswered || isCurrentQuestionAnswered);
    setCurrentScore(newState.currentScore || currentScore);
  };

  const setSelectedOption = (option) => {
    updateContext({ isCurrentQuestionAnswered: true, selectedOption: option });
  };

  const incrementScore = (points) => {
    updateContext({ currentScore: currentScore + points });
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      updateContext({
        currentQuestion: currentQuestion + 1,
        currentQuestionNumber: currentQuestionNumber + 1,
        isCurrentQuestionAnswered: false,
      });
    }
  };


  return (
    <quizContext.Provider
      value={{
        currentQuestion,
        currentQuestionNumber,
        isCurrentQuestionAnswered,
        currentScore,
        userResponse,
        setUserResponse,
        setCurrentQuestion: updateContext,
        setSelectedOption,
        setIsCurrentQuestionAnswered,
        setCurrentScore: incrementScore,
        goToNextQuestion,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export { quizContext, QuizProvider };
