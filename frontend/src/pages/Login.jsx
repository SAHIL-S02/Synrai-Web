import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    });
    const [showPassword, setShowPassword] = useState(false);
    const handelChange = (e)=>{
        setLoginData({...loginData, [e.target.name] : e.target.value})
    }
    return (
        <div className='w-full h-screen bg-gradient-to-l from-[#C190A3] to-[#82BFDE] flex justify-center items-center font-manrope'>

            <form className='w-[30%] h-[60%] bg-white/25 rounded-2xl flex flex-col items-center p-10 shadow-2xl' action="">
                <NavLink  className={'w-10'} to="/"><img src="/icons/logo.png" alt="logo" /></NavLink>
                <h1 className='text-2xl font-semibold my-4' >Sign in to Connect</h1>
                <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handelChange}
                    placeholder="Enter Address"
                    className="
                        w-[90%]
                        h-12
                        px-5
                        mt-4
                        rounded-2xl
                        bg-white/20
                        backdrop-blur-md
                        border border-white/30
                        placeholder:text-gray-500
                        text-gray-800
                        shadow-lg
                        outline-none
                        transition-all
                        duration-300
                        focus:bg-white/30
                        focus:border-white/60
                        focus:ring-2
                        focus:ring-white/40
                        focus:shadow-xl
                    "
                />
                <div className='w-[90%]
                        h-12
                        mt-4 flex rounded-2xl bg-white/20 
                        backdrop-blur-md
                        border border-white/30 text-gray-800
                        shadow-lg
                        '>
                    <input
                    type={showPassword? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    onChange={handelChange}
                    placeholder="Password"
                    className="
                        w-full
                        h-full
                        placeholder:text-gray-500
                        px-5
                        rounded-l-2xl
                        outline-none
                        transition-all
                        duration-300
                        focus:bg-white/30
                        focus:border-white/60
                        focus:ring-2
                        focus:ring-white/40
                        focus:shadow-xl
                    "
                />
                <button className='border-l-1 border-l-gray-400 px-2' onClick={(e)=>{ e.preventDefault(); setShowPassword(!showPassword)}}> <img className='w-6' src={showPassword ? '/icons/lock.svg' : '/icons/unlock.svg'} alt="" /> </button>
                </div>
                <button className='w-[90%]
                font-semibold
                        h-12
                        px-5
                        mt-4
                        rounded-2xl
                        bg-[#0371DF]
                        backdrop-blur-md
                        border border-[#0371DF]/30
                        placeholder:text-gray-500
                        text-white
                        shadow-lg
                        outline-none
                        transition-all
                        duration-300
                        active:bg-[#0371DF]/70
                        active:ring-2
                        active:ring-[#0371DF]/40
                        active:shadow-xl'>
                    Submit
                </button>
                <NavLink className={'text-sm font-semibold text-[#0b1832] my-3'} to='/forgotpassword'>Forgot Password?</NavLink>
                <p className='text-sm font-semibold text-gray-600'>Don't have an account? <NavLink className={"text-[#0b1832]"} to='/sign-up'>Sign Up</NavLink></p>
            </form>
        </div>
    )
}

export default Login
