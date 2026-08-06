import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-[#AFBBF7] to-[#5B96F7] flex flex-col items-center'>
            <h1 className="mx-auto mt-30 w-[60%] bg-gradient-to-b from-[#16060B] to-[#28226C] bg-clip-text text-center text-6xl font-extrabold text-transparent">
                One Platform.
                <br />
                Endless Conversations.
            </h1>
            <p className='text-gray-600 font-medium my-8 text-center'>
                Connect instantly through secure messaging, crystal-clear voice calls,
                and seamless video meetings
                <br />all designed to keep you closer to the people who matter most.
            </p>
            <div>
                <NavLink to="/chats" className={"getButton"}>Get Started Free <span></span></NavLink>
            </div>
            <div className='featureSection flex mt-20 gap-10'>
                <div className='feature flex flex-col items-center'>
                    <h2 className='text-xl font-bold mb-4'>Secure Messaging</h2>
                    <p className='text-gray-600 text-center'>
                        Enjoy end-to-end encrypted messaging for private and secure conversations.
                    </p>
                </div>
                <div className='feature flex flex-col items-center'>
                    <h2 className='text-xl font-bold mb-4'>Crystal-Clear Voice Calls</h2>
                    <p className='text-gray-600 text-center'>
                        Experience high-quality voice calls with minimal latency and clear audio.
                    </p>
                </div>
                <div className='feature flex flex-col items-center'>
                    <h2 className='text-xl font-bold mb-4'>Seamless Video Meetings</h2>
                    <p className='text-gray-600 text-center'>
                        Host or join video meetings effortlessly, with smooth video and audio streaming.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
