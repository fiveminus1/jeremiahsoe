import React from 'react';

const Taskbar = () => { 
    return (
        <div className="fixed bottom-0 left-0 right-0 h-[35px]
            bg-gradient-to-t from-[#2961DE] to-[#2157D5] 
            border-t border-[#ffffff66] shadow-inner
            shadow-[inset_0_2px_3px_rgba(255,255,255,0.3), inset_0_1px_0_rgba(0,0,0,0.4)]
            flex items-center justify-between pr-2 z-50">
            <div className="flex items-center gap-2 h-full">
                <button className="h-full flex items-center gap-2
                    pl-3 pr-5 
                    bg-gradient-to-t from-[#6DAF6D] to-[#46A746]
                    border-r border-[#1A3F1A] 
                    text-white text-sm font-semibold
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.25)]
                    hover:brightness-110 active:translate-y-px
                    rounded-r-full min-w-[90px]">
                        <img src="/icons/xp-logo.png" alt="Windows XP Logo" 
                        className="h-4 w-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]" />
                        <span className="
                            text-white text-sm font-bold italic font-[Tahoma] drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">
                                start
                            </span>
                </button>
            </div>
        </div>
    )
}

export default Taskbar;