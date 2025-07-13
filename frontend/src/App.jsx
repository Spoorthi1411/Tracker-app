import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
