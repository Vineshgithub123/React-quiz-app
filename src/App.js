import Quiz from './pages/quiz/quiz';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuizProvider } from './contexts/quizContext';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start-quiz' element={<QuizProvider><Quiz /></QuizProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
