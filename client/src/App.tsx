import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AsideLeft from './components/Sidebar/AsideLeft';
import AsideRight from './components/Sidebar/AsideRight';
import AskAsideLeft from './components/Sidebar/AskAsideLeft';
import AskAsideRight from './components/Sidebar/AskAsideRight';
import HomeAsideLeft from './components/Sidebar/HomeAsideLeft';
import Askpage from './pages/Askpage';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  // Home, Askpage, Detail 에서는 Aside가 보이고 Login창에서는 안보이게끔
  // Aside Main Aside = 2 : 5 : 3

  return (
    <BrowserRouter>

      <Routes>

        <Route element={[<HomeAsideLeft/>, <AsideRight/>, <Navbar />]}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={[<AsideLeft/>, <Navbar />, <AsideRight/>]}>
          <Route path='detail/:id' element={<Detail />} />
        </Route>

        <Route element={[<AskAsideLeft/>, <Navbar />, <AskAsideRight/>]}>
          <Route path='askpage' element={<Askpage />} />
        </Route>
        
        <Route>
          <Route path='login' element={<Login />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
