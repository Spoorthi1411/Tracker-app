import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/Home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
      </Routes>
     {/* <Home /> */}
     {/* <Login/> */}
     {/* <SignUp/>*/}
    </div>
  );
}

export default App;
