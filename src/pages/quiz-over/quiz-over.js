//React imports
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//Style imports
import './quiz-over.scss';
// User defined Imports
import { quizContext } from 'src/contexts/quizContext';
import restartLogo from 'src/assets/images/restart.svg';
import homeLogo from 'src/assets/images/home.svg';

const QuizFinished = () => {
    const { currentScore, noOfQuestionAttempted, noOfWrongAnswers, noOfRightAnswers, setCurrentScore, resetQuizData } = useContext(quizContext);
    //Navigator
    const navigate = useNavigate();
    const restart = () => {
        resetQuizData();
        navigate('/start-quiz')
    }
    const goToHome = () => {
        resetQuizData();
        navigate('/')
    } 
    return (
        <div className='wrapper'>
            <div className='user-quiz-details'>
                <div className='quiz-content'>
                    <h1>Quiz Completed!</h1>
                    <div className='quiz-details'>
                        <ul>
                            <li>Your Score: {currentScore}</li>
                            <li>No of Attempts: {noOfQuestionAttempted}</li>
                            <li>No of Right Answer: {noOfRightAnswers}</li>
                            <li>No of Wrong Answer: {noOfWrongAnswers}</li>

                        </ul>
                    </div>
                </div>
                <div className='replay'>
                    <Link to="/">
                        <button className='restart-btn'><img src={homeLogo} onClick={goToHome}/><span>Go to Home</span></button>
                    </Link>
                    <button className='restart-btn'  onClick={restart}><img src={restartLogo} /><span>Replay Quiz</span></button>
                </div>
            </div>
        </div>
    )
};

export default QuizFinished;