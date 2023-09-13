import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home' 
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';



export default function MainRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
