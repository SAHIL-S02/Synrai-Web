import React from 'react'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <div className='h-screen w-[5rem] bg-[#F0F4FA] pt-2 flex justify-between flex-col shadow-md absolute'>
            <div>
                <div className='w-[50%] aspect-square bg-[#AFBBF7] mx-auto rounded-md text-center mt-6 mb-6 p-1'>
                    <NavLink to='/' ><img src="/icons/logo.png" alt="" /></NavLink>
                </div>
                <div className='w-[40%] aspect-square bg-[#5B96F7] mx-auto rounded-md mt-6 mb-6 p-1'>
                    <img src="/icons/ChatCircleDots.svg" alt="" />
                </div>
                <div className='w-[40%] aspect-square mx-auto rounded-md mt-6 mb-6 p-1'>
                    <img src="/icons/Users.svg" alt="" />
                </div>
                <div className='w-[40%] aspect-square mx-auto rounded-md mt-6 mb-6 p-1'>
                    <img src="/icons/Phone.svg" alt="" />
                </div>
                <hr className='mt-6 mb-6 w-[70%] mx-auto'/>
                <div className='w-[40%] aspect-square mx-auto rounded-md mt-6 mb-6 p-1'>
                    <img src="/icons/Gear.svg" alt="" />
                </div>
            </div>
            <div>
                <div className='w-[40%] aspect-square mx-auto rounded-bl-full mt-6 mb-6'>
                    <img src="/icons/dp.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SideBar
