import { CircleHelp, Grip, Lightbulb, Plus, Settings, User, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className="fixed left-0 right-0 top-0 h-12 z-10 w-full bg-[#000f28] flex items-center justify-between px-5">
                <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <Grip size={18} className='cursor-pointer text-white/80' />
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
            </div>
        </>
    )
}

export default Header