import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Askpage from './pages/Askpage';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="askpage" element={<Askpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
