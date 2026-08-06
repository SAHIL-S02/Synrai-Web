import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-13 bg-[#AFBBF7] flex justify-between pt-3 pl-6 pr-6 flex-wrap'>
            <div className='w-10 '>
                <NavLink to="/" ><img src="/icons/logo.png" alt="" /></NavLink>
            </div>
            <div className='flex justify-between w-[30%]'>
                <NavLink className={"navButton"} to="/">Home</NavLink>
                <NavLink className={"navButton"} to="/home">Chats & Calls</NavLink>
                <NavLink className={"navButton"} to="/home">Contact</NavLink>
                <NavLink className={"navButton"} to="/home">About Us</NavLink>
            </div>
            <div className='flex justify-between w-[13%]'>
                <NavLink className={"loginButton"} to="/home">Log In</NavLink>
                <NavLink className={"signupButton"} to="/home">Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Navbar
