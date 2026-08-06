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
                <NavLink className={"navButton"} to="/chats">Chats & Calls</NavLink>
                <NavLink className={"navButton"} to="/contact">Contact</NavLink>
                <NavLink className={"navButton"} to="/about-us">About Us</NavLink>
            </div>
            <div className='flex justify-between w-[13%]'>
                <NavLink className={"loginButton"} to="/login">Log In</NavLink>
                <NavLink className={"signupButton"} to="/sign-up">Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Navbar
