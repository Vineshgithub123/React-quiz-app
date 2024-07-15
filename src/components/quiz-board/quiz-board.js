import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./quiz-board.scss";
import { quizContext } from 'src/contexts/quizContext';
import { QUESTIONS } from "src/utils/constants/questions";
import TimeUpModal from 'src/components/time-up/time-up';
import ShowAnswerModal from 'src/components/show-answer/show.answer';
import timerlogo from "src/assets/images/timer.svg";

const QuizBoard = () => {
  //Context Variables
  const {currentQuestion, resetQuizData, setCurrentScore, setCurrentQuestion, setnoOfQuestionAttempted, setNoOfRightAnswers, setNoOfWrongAnswers} = useContext(quizContext);

  //Local Variables
  const [isTimeUpModalOpen, setIsTimeUpModalOpen] = useState(false);
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(7);
  const [stoppedTime, setStoppedTime] = useState(null);
  const [choosenOption, setChoosenOption] = useState(null);
  const [showAnswerOnly, setShowAnswerOnly] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);

  //Navigator
  const navigate = useNavigate();

  //Useeffect executes when change in quizData
  useEffect(()=> {
    setCurrentQuestion(0)
  }, resetQuizData)

  //Useeffect executes based on the timer and option chooses
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0 && !choosenOption) {
        setRemainingTime(prevTime => prevTime - 1);
        setShowAnswerOnly(false)
      } else {
        clearInterval(intervalId);
        if (!choosenOption) {
          // setIsTimeUpModalOpen(true);
          setShowAnswerOnly(true)
        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [remainingTime, choosenOption]);

  /**
   * function handles for the next button;
   * if questions ends, navigates to end quiz component
   */
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

  /**
   * 
   * @param {choosen answer Id} optionId 
   * @param {currentQuestion index} index 
   * @param {gets the current question} currentQuestion 
   */
  const chooseAnswer = (optionId, index, currentQuestion) => {
    setChoosenOption(index);
    setStoppedTime(remainingTime);
    if (optionId === currentQuestion.answer) {
      setNoOfRightAnswers(prevScore => prevScore + 1);
      setRightAnswer(true);
      setCurrentScore(prevScore => prevScore + 1)
    } else {
      setRightAnswer(false);
      setNoOfWrongAnswers(prevScore => prevScore + 1);
    }
    setnoOfQuestionAttempted(prev => prev + 1)
    setAnswerModalOpen(true)
  };

  /**
   * 
   * Closes timeup modal 
   */
  const closeTimeUpModal = () => {
    setIsTimeUpModalOpen(false);
    setAnswerModalOpen(true);
  };

  /**
   * Closes Answer modal
   */
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
          <span className='timer-text'> <img className="timer-img" src={timerlogo} alt="Timer" />Your Time Goes Here</span>
          <span className='time'>{stoppedTime ? stoppedTime : remainingTime}</span>
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
              onClick={() => chooseAnswer(option.id, index, QUESTIONS[currentQuestion])}
            >
              {option.option || option}
            </span>
          ))}
        </div>
      </div>
      <div className="bottom">
        <button disabled={!choosenOption || remainingTime === 0} className="quiz-next-btn next-btn" onClick={handleNext}>
          {!(currentQuestion < QUESTIONS.length - 1) ? "Submit" : 'Next'}
        </button>
      </div>
      {<TimeUpModal isOpen={isTimeUpModalOpen && !choosenOption} onClose={closeTimeUpModal} />}
      <ShowAnswerModal isRightAnswer={rightAnswer} showAnswerOnly={showAnswerOnly} onClose={closeAnswerModal} answerData={{ question: QUESTIONS[currentQuestion]?.question, answer: QUESTIONS[currentQuestion]?.options[QUESTIONS[currentQuestion]?.answer  - 1 ].option }} isOpen={answerModalOpen} />
    </div>

  );
};

export default QuizBoard;
