import "./quiz.scss";
import QuizBoard from "src/components/quiz-board/quiz-board";
import ScoreCard from "src/components/score-board/score-board";
import QuizFinished from "src/pages/quiz-over/quiz-over";
const Quiz = () => {
    return (
        <div className="board-wrapper">
            <ScoreCard />
            <QuizBoard />
            {/* <QuizFinished/> */}
        </div>
    )
};

export default Quiz;