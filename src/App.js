import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Quiz from 'src/pages/quiz/quiz';
import { QuizProvider } from 'src/contexts/quizContext';
import Home from 'src/pages/home/home';

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
