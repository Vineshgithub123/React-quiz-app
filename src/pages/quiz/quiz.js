import "./quiz.scss";
import QuizBoard from "src/components/quiz-board/quiz-board";
import ScoreCard from "src/components/score-board/score-board";
import { QuizProvider } from "src/contexts/quizContext";
import QuizFinished from "src/pages/quiz-over/quiz-over";
const Quiz = () => {
    return (
        <div className="board-wrapper">
            <QuizProvider>
                <ScoreCard />
                <QuizBoard />
            </QuizProvider>
            {/* <QuizFinished/> */}
        </div>
    )
};

export default Quiz;