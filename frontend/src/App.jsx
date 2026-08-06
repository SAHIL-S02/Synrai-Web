import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import { useLocation } from 'react-router-dom';
import Chats from './pages/Chats';
import Navbar from './components/Navbar';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  const hideSidebar = (location.pathname == "/" || location.pathname == "/login");
  const hideNavbar = (location.pathname == "/chats" || location.pathname == "/web" || location.pathname == "/login");
  return (
    <div>
      {hideSidebar ? "":<SideBar/>}
      {hideNavbar ? "":<Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
