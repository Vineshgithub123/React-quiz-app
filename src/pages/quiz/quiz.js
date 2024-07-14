import "./quiz.scss";
import QuizBoard from "../../components/quiz-board/quiz-board";
import ScoreCard from "../../components/score-board/score-board";
import QuizFinished from "../quiz-over/quiz-over";
const Quiz = () => {
    return (
        <div className="board-wrapper">
            {/* <ScoreCard />
            <QuizBoard /> */}
            <QuizFinished/>
        </div>
    )
};

export default Quiz;