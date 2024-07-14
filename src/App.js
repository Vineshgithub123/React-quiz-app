import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Quiz from 'src/pages/quiz/quiz';
import { QuizProvider } from 'src/contexts/quizContext';
import Home from 'src/pages/home/home';
import QuizFinished from './pages/quiz-over/quiz-over';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start-quiz' element={<QuizProvider><Quiz /></QuizProvider>} />
        <Route path='/end-quiz' element={<QuizProvider><QuizFinished /></QuizProvider>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
