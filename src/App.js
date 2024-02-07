import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
function App() {

  // state variable to check weather the user is loged in or not 
  const [isLogedIn,setIsLogedIn] = useState(false);

  return (
    <div className='w-screen h-[60rem]  bg-slate-900 flex flex-col'>
      <Navbar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>

      <Routes>
        <Route path='/' element={<Home isLogedIn={isLogedIn}/>}></Route>
        <Route path='/login' element={<Login setIsLogedIn={setIsLogedIn}/>}></Route>
        <Route path='/signup' element={<Signup setIsLogedIn={setIsLogedIn}/>}></Route>
        <Route path='/dashboard' element={
        <PrivateRoute isLogedIn={isLogedIn} >
          <Dashboard/>
        </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
