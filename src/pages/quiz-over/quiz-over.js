import { useContext } from 'react';
import './quiz-over.scss';
import restartLogo from 'src/assets/images/restart.svg';
import homeLogo from 'src/assets/images/home.svg';

import { quizContext } from 'src/contexts/quizContext';
import { Link } from 'react-router-dom';

const QuizFinished = () => {
    const { userResponse } = useContext(quizContext);
    console.log(userResponse)
    return (
        <div className='wrapper'>
            <div className='user-quiz-details'>
                <div className='quiz-content'>
                    <h1>Quiz Completed!</h1>
                    <div className='quiz-details'>
                        <ul>
                            <li>Your Score: {userResponse.currentScore}</li>
                            <li>No of Attempts: {userResponse.noOfQuestionAttempted}</li>
                            <li>No of Right Answer: {userResponse.noOfRightAnswers}</li>
                            <li>No of Wrong Answer: {userResponse.noOfWrongAnswers}</li>

                        </ul>
                    </div>
                </div>
                <div className='replay'>
                    <Link to="/">
                        <button className='restart-btn'><img src={homeLogo} /><span>Go to Home</span></button>
                    </Link>
                    <Link to='/start-quiz'>
                        <button className='restart-btn'><img src={restartLogo} /><span>Replay Quiz</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default QuizFinished;