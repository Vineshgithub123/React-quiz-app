import React, { useState, useEffect, useContext } from 'react';
import timerlogo from "../../assets/images/timer.svg";
import "./quiz-board.scss";
import { quizContext } from '../../contexts/quizContext';
import { QUESTIONS } from "../../utils/constants/questions";

const QuizBoard = () => {
  const {
    currentQuestion,
    selectedOption,
    setCurrentQuestion,
    setSelectedOption,
    setIsCurrentQuestionAnswered,
    setCurrentScore,
    
  } = useContext(quizContext);

  const [isTimeUpModalOpen, setIsTimeUpModalOpen] = useState(false);
  const [timer, setTimer] = useState(7);
  const [userAnswered, setUserAnswered] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(intervalId);
        setIsTimeUpModalOpen(true);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      console.log(currentQuestion)
      setCurrentQuestion({currentQuestion:currentQuestion + 1});
      setSelectedOption(null);
      setTimer(7);
    } else {
      // Handle quiz completion logic (optional)
    }
  };

  const chooseAnswer = (index, option) => {
    setSelectedOption(index);
    setUserAnswered([...userAnswered, index]);
    if (index === QUESTIONS[currentQuestion]?.answer) {
      setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  const handleOnClose = (event) => {
    setIsTimeUpModalOpen(false);
    handleNext();
    setTimer(7);
  };

  return (
    <div className="board">
      <div className="top">
        <div className="question-no">
          <span className="current-ques">{currentQuestion + 1}</span>
          <span className="total-ques">/ {QUESTIONS.length}</span>
        </div>
        <div className="timer">
          <img className="timer-img" src={timerlogo} alt="Timer" />
          <span>{timer}</span>
        </div>
      </div>
      <div className="ques-ans">
        <div className="question">
          <p>{QUESTIONS[currentQuestion]?.question || 'Loading question...'}</p>
        </div>
        <div className="answers">
          {QUESTIONS[currentQuestion]?.options?.map((option, index) => (
            <span
              key={index}
              
              className={`options ${selectedOption === index ? (QUESTIONS[currentQuestion]?.answer === index ? ['correct', 'answer-hover'] : ['incorrect', 'answer-hover']) : ''}`}
              onClick={() => chooseAnswer(index, option)}
            >
              {option.option || option}
            </span>
          ))}
        </div>
      </div>
      <div className="bottom">
        <button className="quiz-next-btn next-btn "  onClick={handleNext}>
          Next
        </button>
      </div>
      {/* TimeUpModal component (assuming it's defined elsewhere) */}
      {/* {isTimeUpModalOpen && <TimeUpModal onClose={handleOnClose} */}
         </div>

   );
};

export default QuizBoard;
