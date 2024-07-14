import './quiz-over.scss';
import restartLogo from 'src/assets/images/restart.svg'
import { quizContext } from 'src/contexts/quizContext';

const QuizFinished = () => {
    // const {}
    return (
        <div className='wrapper'>
            <div className='user-quiz-details'>
                <h1>Quiz Completed!</h1>
                <div className='quiz-details'>
                    <ul>
                        <li>Your Score</li>
                        <li>No of Attempts</li>
                        <li>No of Right Answer</li>
                        <li>No of Wrong Answer</li>

                    </ul>
                </div>
                <button className='restart-btn'><img src={restartLogo}/><span>Replay Quiz</span></button>
            </div>
        </div>
    )
};

export default QuizFinished;