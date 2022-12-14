import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AsideLeft from './components/Sidebar/AsideLeft';
import AsideRight from './components/Sidebar/AsideRight';
import AskAsideLeft from './components/Sidebar/AskAsideLeft';
import AskAsideRight from './components/Sidebar/AskAsideRight';
import DetailAsideLeft from './components/Sidebar/DetailAsideLeft';
import HomeAsideLeft from './components/Sidebar/HomeAsideLeft';
import { useLogin } from './hooks/user/users';
import Askpage from './pages/Askpage';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';
import { QuestionElement } from './types/mainQuestions/questionTypes';

function App() {
  const [isLogin, setIsLogin] = useLogin();

  const [question, setQuestion] = useState<QuestionElement[]>([]);

  return (
    <BrowserRouter>
      <Navbar
        setQuestion={setQuestion}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Routes>
        <Route
          path="/"
          element={[
            <HomeAsideLeft />,
            <Home
              question={question}
              setQuestion={setQuestion}
              isLogin={isLogin}
            />,
          ]}
        />
        <Route
          path="detail/:id"
          element={[<DetailAsideLeft />, <Detail isLogin={isLogin} />]}
        />
        <Route
          path="askpage"
          element={[<AskAsideLeft />, <AskAsideRight />, <Askpage />]}
        />
        <Route path="login" element={<Login setGlobalLogin={setIsLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
