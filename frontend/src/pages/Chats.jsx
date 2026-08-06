import React from 'react'

const Chats = () => {
    return (
        <div className='main h-screen grid col-end-3 row-span-3 ml-[5rem] grid-cols-12 grid-rows-3 font-manrope'>
            <div className='col-span-3 row-span-3 bg-[#F8FAFF] border-r-2 shadow-olive-950 shadow-2xl border-[#E5E5E5] flex flex-col'>
                <h1 className='font-manrope font-bold text-2xl mt-6 ml-4'>
                    Chats
                </h1>
                <div className='flex justify-center items-center'>
                    <div className='searchBar flex justify-center items-center gap-2 w-[80%] h-10 bg-[#EAF2FE] mx-auto my-4'>
                        <img src="/icons/search.svg" alt="" />
                        <input type='text' placeholder='Search' className='w-full '/>
                    </div>
                </div>
                <hr className='w-[90%] mx-auto col border-[#B4B4B4]'/>
                    <p className='font-manrope font-semibold text-[0.8rem] w-[80%] mx-auto text-[#676667]'>
                        All Chats
                    </p>
                    <div className='chatList flex-1 overflow-y-auto'>
                            {/* chat1 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp1.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>Pink Panda</p>
                                    <p className='name text-xs'>
                                        You: thnx!
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    9:36
                                </p>
                                <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    3
                                </div>
                            </div>
                        </div>
                        {/* chat2 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp2.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>Dog Hat</p>
                                    <p className='name text-xs'>
                                        It’s so quite outside 🧐
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    9:30
                                </p>
                                <div className='w-3 h-3 invisible  aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    3
                                </div>
                            </div>
                        </div>
                        {/* chat3 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp3.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>Cute Turtle</p>
                                    <p className='name text-xs'>
                                        That’s It. Goodbye!
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    9:20
                                </p>
                                <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    1
                                </div>
                            </div>
                        </div>
                        {/* chat4 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp4.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>Cool spirit</p>
                                    <p className='name text-xs'>
                                        Look what I found
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    9:16
                                </p>
                                <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    2
                                </div>
                            </div>
                        </div>
                        {/* chat5 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp5.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>strange cat</p>
                                    <p className='name text-xs'>
                                        You: Hi, sorry to bother you..
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    9:06
                                </p>
                                <div className='w-3 h-3 invisible  aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    3
                                </div>
                            </div>
                        </div>
                        {/* chat6 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp6.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>Fire Fox</p>
                                    <p className='name text-xs'>
                                        What does the fox says?
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    8:36
                                </p>
                                <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    3
                                </div>
                            </div>
                        </div>
                        {/* chat7 */}
                        <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                            <div className='flex items-center gap-3'>
                                <img src="/dp/dp1.svg" alt="dp" />
                                <div className='flex flex-col gap-1'>
                                    <p className='name font-semibold text-sm'>Pink Panda</p>
                                    <p className='name text-xs'>
                                        Hello my nigga
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <p className='text-xs'>
                                    9:36
                                </p>
                                <div className='w-3 h-3 invisible  aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                    3
                                </div>
                            </div>
                        </div>
                        {/* chat1 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp1.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>Pink Panda</p>
                                <p className='name text-xs'>
                                    You: thnx!
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                9:36
                            </p>
                            <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                3
                            </div>
                        </div>
                    </div>
                    {/* chat2 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp2.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>Dog Hat</p>
                                <p className='name text-xs'>
                                    It’s so quite outside 🧐
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                9:30
                            </p>
                            <div className='w-3 h-3 invisible  aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                3
                            </div>
                        </div>
                    </div>
                    {/* chat3 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp3.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>Cute Turtle</p>
                                <p className='name text-xs'>
                                    That’s It. Goodbye!
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                9:20
                            </p>
                            <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                1
                            </div>
                        </div>
                    </div>
                    {/* chat4 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp4.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>Cool spirit</p>
                                <p className='name text-xs'>
                                    Look what I found
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                9:16
                            </p>
                            <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                2
                            </div>
                        </div>
                    </div>
                    {/* chat5 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp5.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>strange cat</p>
                                <p className='name text-xs'>
                                    You: Hi, sorry to bother you..
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                9:06
                            </p>
                            <div className='w-3 h-3 invisible  aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                3
                            </div>
                        </div>
                    </div>
                    {/* chat6 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp6.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>Fire Fox</p>
                                <p className='name text-xs'>
                                    What does the fox says?
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                8:36
                            </p>
                            <div className='w-3 h-3   aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                3
                            </div>
                        </div>
                    </div>
                    {/* chat7 */}
                    <div className='chat w-[80%] mx-auto h-15 bg-[#FFFFFF] flex items-center px-3 justify-between my-6'>
                        <div className='flex items-center gap-3'>
                            <img src="/dp/dp1.svg" alt="dp" />
                            <div className='flex flex-col gap-1'>
                                <p className='name font-semibold text-sm'>Pink Panda</p>
                                <p className='name text-xs'>
                                    Hello my nigga
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>
                            <p className='text-xs'>
                                9:36
                            </p>
                            <div className='w-3 h-3 invisible  aspect-square bg-[#5B96F7] font-semibold text-[#FFFFFF] text-center text-[0.6rem] rounded-full flex justify-center items-center'>
                                3
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col-span-9 row-span-3 bg-[#FFFFFF] flex justify-center items-center'>
                <div className='flex justify-center items-center flex-col'>
                    <img src="/icons/new-chat.svg" alt="new-chat" />
                    <p className='text-center'>
                        Select a conversation or start a new one
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chats
