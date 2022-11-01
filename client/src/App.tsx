import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AsideLeft from './components/Sidebar/AsideLeft';
import AsideRight from './components/Sidebar/AsideRight';
import AskAsideLeft from './components/Sidebar/AskAsideLeft';
import AskAsideRight from './components/Sidebar/AskAsideRight';
import HomeAsideLeft from './components/Sidebar/HomeAsideLeft';
import { useLogin } from './hooks/user/users';
import Askpage from './pages/Askpage';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [isLogin, setIsLogin] = useLogin();
  console.log('isLogin?', isLogin);

  return (
    <BrowserRouter>
      {/* <h2>login:{isLogin ? 'true' : 'false'}</h2> */}
      <Routes>
        <Route
          element={[
            <HomeAsideLeft />,
            <AsideRight />,
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />,
          ]}
        >
          <Route path="/" element={<Home isLogin={isLogin} />} />
        </Route>

        <Route
          element={[
            <AsideLeft />,
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />,
            <AsideRight />,
          ]}
        >
          <Route path="detail/:id" element={<Detail />} />
        </Route>

        <Route
          element={[
            <AskAsideLeft />,
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />,
            <AskAsideRight />,
          ]}
        >
          <Route path="askpage" element={<Askpage />} />
        </Route>

        <Route>
          <Route path="login" element={<Login setGlobalLogin={setIsLogin} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
