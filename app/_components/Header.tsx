"use client";

import { CircleHelp, Grip, Lightbulb, Plus, Settings, User, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSidebar } from './context/SidebarContext';

const Header = () => {
    const { toggleSidebar } = useSidebar();
    return (
        <>
            <div className="fixed left-0 right-0 top-0 h-12 z-[999] w-full bg-[#000f28] flex items-center justify-between px-5">
                <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                            className="cursor-pointer text-white/80 relative group"
                        >
                            <Grip size={18} />
                            <span className="absolute text-nowrap top-full mt-1 left-0 transform  bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                                Toggle Sidebar
                            </span>
                        </button>
                        <Link
                            href="#"
                            aria-label="Dynamic 365"
                            className="text-sm text-white/80 hover:bg-white/10 duration-300 p-1 px-2 rounded-md hidden lg:block relative group"
                        >
                            Dynamic 365
                            <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                                Go to Dynamic 365
                            </span>
                        </Link>
                    </div>
                    <div className="w-px h-5 bg-white/50 hidden lg:block" />
                    <Link
                        href="#"
                        aria-label="Sales Hub"
                        className="text-sm text-white/80 hover:bg-white/10 duration-300 p-1 px-2 rounded-md hidden lg:block relative group"
                    >
                        Sales Hub
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            Go to Sales Hub
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        aria-label="Lightbulb"
                        className="text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center relative group"
                    >
                        <Lightbulb size={16} />
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            Lightbulb
                        </span>
                    </button>
                    <button
                        aria-label="Add New"
                        className="text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center relative group"
                    >
                        <Plus size={16} />
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            Add New
                        </span>
                    </button>
                    <button
                        aria-label="Settings"
                        className="text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center relative group"
                    >
                        <Settings size={16} />
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            Settings
                        </span>
                    </button>
                    <button
                        aria-label="Help"
                        className="text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center relative group"
                    >
                        <CircleHelp size={16} />
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            Help
                        </span>
                    </button>
                    <button
                        aria-label="Search Users"
                        className="text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center relative group"
                    >
                        <UserRoundSearch size={16} />
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            Search Users
                        </span>
                    </button>
                    <button
                        aria-label="User Profile"
                        className="text-white/80 hover:bg-white/10 duration-300 bg-white border border-1 border-white/70 rounded-full p-1 h-7 w-7 flex items-center justify-center relative group"
                    >
                        <User size={16} className="text-black" />
                        <span className="absolute text-nowrap top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
                            User Profile
                        </span>
                    </button>
                </div>
            </div>



            {/* <div className="fixed left-0 right-0 top-0 h-12 z-10 w-full bg-[#000f28] flex items-center justify-between px-5">
                <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <Grip onClick={toggleSidebar} size={18} className='cursor-pointer text-white/80' />
                        <Link href={"#"} className='text-sm text-white/80 hover:bg-white/10 duration-300 p-1 px-2 rounded-md hidden lg:block'>Dynamic 365</Link>
                    </div>
                    <div className="w-px h-5 bg-white/50 hidden lg:block" />
                    <Link href={"#"} className='text-sm text-white/80 hover:bg-white/10 duration-300 p-1 px-2 rounded-md hidden lg:block'>Sales Hub</Link>
                </div>
                <div className="flex items-center gap-1">
                    <button className='text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center'>
                        <Lightbulb size={16} />
                    </button>
                    <button className='text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center'>
                        <Plus size={16} />
                    </button>
                    <button className='text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center'>
                        <Settings size={16} />
                    </button>
                    <button className='text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center'>
                        <CircleHelp size={16} />
                    </button>
                    <button className='text-white/80 hover:bg-white/10 duration-300 rounded-md p-1 h-7 w-7 flex items-center justify-center'>
                        <UserRoundSearch size={16} />
                    </button>
                    <button className='text-white/80 hover:bg-white/10 duration-300 bg-white border border-1 border-white/70 rounded-full p-1 h-7 w-7 flex items-center justify-center'>
                        <User size={16} className='text-black' />
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default Header