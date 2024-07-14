import React, { useState, useEffect, useContext } from 'react';
import timerlogo from "src/assets/images/timer.svg";
import "./quiz-board.scss";
import { quizContext } from 'src/contexts/quizContext';
import { QUESTIONS } from "src/utils/constants/questions";
import TimeUpModal from '../time-up/time-up';
import ShowAnswerModal from '../show-answer/show.answer';
import { useNavigate } from 'react-router-dom';

const QuizBoard = () => {
  const {userResponse, setUserResponse} = useContext(quizContext);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prevScore => prevScore + 1);
      setChoosenOption(null);
      setRemainingTime(7);
      setStoppedTime(null);
    } else {
      navigate('/end-quiz')
    }
  };


  const [isTimeUpModalOpen, setIsTimeUpModalOpen] = useState(false);
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(7);
  const [stoppedTime, setStoppedTime] = useState(null);
  const [count, setCount] = useState(0);
  const [rightAnswersCount, setrightAnswersCount] = useState(0);
  const [wrongAnswersCount, setwrongAnswersCount] = useState(0);
  const [choosenOption, setChoosenOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showAnswerOnly, setShowAnswerOnly] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0 && !choosenOption) {
        setRemainingTime(prevTime => prevTime - 1);
      } else {
        clearInterval(intervalId);
        if (!choosenOption) {
          setIsTimeUpModalOpen(true);
          setShowAnswerOnly(true)
        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [remainingTime, choosenOption]);



  const chooseAnswer = (optionId, index, option, currentQuestion) => {
    setChoosenOption(index);
    setStoppedTime(remainingTime);
    setCurrentScore(prevScore => prevScore + 1);
    setCount(prevScore => prevScore + 1);
    if (optionId === currentQuestion.answer) {
      setrightAnswersCount(prevScore => prevScore + 1);
      setRightAnswer(true)
    } else {
      setRightAnswer(false)

      setwrongAnswersCount(prevScore => prevScore + 1);
    }
    setAnswerModalOpen(true)
    generateUserResponse(index, option, currentQuestion);
    const userResponseData = generateUserResponse(index, option, currentQuestion);
    setUserResponse({ ...userResponseData });
  };

  const handleOnClose = (event) => {
    setIsTimeUpModalOpen(false);
    setAnswerModalOpen(true);
  };

  const generateUserResponse = (index, option, currentQuestion) => {
    return {
      totalQuestions: QUESTIONS.length,
      currentQuestion: { ...currentQuestion },
      currentScore: currentScore,
      noOfQuestionAttempted: count,
      noOfRightAnswers: rightAnswersCount,
      noOfWrongAnswers: wrongAnswersCount,
    }
  }

  const closeAnswerModal = () => {
    setAnswerModalOpen(false)
    handleNext();
  }

  return (
    <div className="board">
      <div className="top">
        <div className="question-no">
          <span className="current-ques">{currentQuestion + 1}</span>
          <span className="total-ques">/ {QUESTIONS.length}</span>
        </div>
        <div className="timer">
          <img className="timer-img" src={timerlogo} alt="Timer" />
          <span>{stoppedTime ? stoppedTime : remainingTime}</span>
        </div>
      </div>
      <div className="ques-ans">
        <div className="question">
          <p>{QUESTIONS[currentQuestion]?.question}</p>
        </div>
        <div className="answers">
          {QUESTIONS[currentQuestion]?.options?.map((option, index) => (
            <span
              key={index}
              style={{ pointerEvents: choosenOption || remainingTime === 0 ? 'none' : '' }}
              className={`options ${(choosenOption === index ? QUESTIONS[currentQuestion]?.answer === option.id ? 'correct' : 'incorrect' : '')}`}
              onClick={() => chooseAnswer(option.id, index, option, QUESTIONS[currentQuestion])}
            >
              {option.option || option}
            </span>
          ))}
        </div>
      </div>
      <div className="bottom">
        <button className="quiz-next-btn next-btn" onClick={handleNext}>
          {!(currentQuestion < QUESTIONS.length - 1) ? "Submit" : 'Next'}
        </button>
      </div>
      {<TimeUpModal isOpen={isTimeUpModalOpen && !choosenOption} onClose={handleOnClose} />}
      <ShowAnswerModal isRightAnswer={rightAnswer} showAnswerOnly={showAnswerOnly} onClose={closeAnswerModal} answerData={{ question: QUESTIONS[currentQuestion]?.question, answer: QUESTIONS[currentQuestion]?.options[QUESTIONS[currentQuestion]?.answer].option }} isOpen={answerModalOpen} />
    </div>

  );
};

export default QuizBoard;
