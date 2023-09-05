// MainRoute.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './component/login/login.jsx';
import Registration from './component/register/register.jsx';

export default function MainRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}