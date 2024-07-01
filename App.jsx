import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import TVshows from './pages/TVshows/TVshows';
import Movies from './pages/Movies/Movies';
import Mylist from './pages/Mylist/Mylist';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate("/")
      }else{
        console.log("Logged Out");
        navigate("/login")
      }
    })
  },[]);

  return (
    <>
    <div>
    <ToastContainer theme='dark'/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      <Route path='/TV_shows/121-35-8-79/tv' element={<TVshows/>}/>
      <Route path='/Movies/414-3-76' element={<Movies/>}/>
      <Route path='/My-list/630-42-12' element={<Mylist/>}/>
    </Routes>
   {/* <Home/> */}
   </div>
    </>
  )
}

export default App