import "./quiz.scss";
import QuizBoard from "src/components/quiz-board/quiz-board";
import ScoreCard from "src/components/score-board/score-board";
const Quiz = () => {
    return (
        <div className="board-wrapper">
            <ScoreCard />
            <QuizBoard />
        </div>
    )
};

export default Quiz;