import { useContext } from "react";
import "./score-board.scss";
import { quizContext } from "src/contexts/quizContext";

const ScoreCard = () => {
    const {userResponse} = useContext(quizContext)
    console.log(userResponse)
    
    
    return (
        <div className="score-card-wrap">
            <div className="content">
                <h2>Your Score</h2>
                <div className="score"><span>{userResponse?.currentScore ?? 0}</span></div>
                <div className="timer"></div>
            </div>
        </div>
    )
};
export default ScoreCard;