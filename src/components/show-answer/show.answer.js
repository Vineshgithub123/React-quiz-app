import righAnswerLogo from 'src/assets/images/tick.svg';
import wrongAnswerLogo from 'src/assets/images/cross.svg';
import rightArrow from "src/assets/images/right-arrow.svg";
import './show-answer.scss';

const ShowAnswerModal = ({ isOpen, onClose, isRightAnswer, showAnswerOnly, answerData }) => {
    const answerImage = isRightAnswer ? righAnswerLogo : wrongAnswerLogo;
    const answerText = isRightAnswer ? 'Right Answer' : 'Wrong Answer';
    const handleButtonClick = (event) => {
        onClose(event)
    }
    return (
        <div className={`answer-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="answer-content">
                {
                    !showAnswerOnly ? (
                        <div className="image">
                            <img src={answerImage} alt={answerText} />
                            <p>{answerText}</p>
                        </div>) : ""
                }
                <div className='answer'>
                    <p>Q:{answerData.question}</p>
                    <span className='ans'>{showAnswerOnly ? <img src={righAnswerLogo}/> : ""} <p >{answerData.answer}</p></span>
                </div>
                <button className="try-next-btn" data-text="Next Question" onClick={handleButtonClick}>
                    <img className="img" src={rightArrow} /></button>
            </div>
        </div>
    )
};

export default ShowAnswerModal;