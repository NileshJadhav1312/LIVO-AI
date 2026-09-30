import React from 'react';

export default function LogoCloud() {
  return (
    <div className="w-full pt-1 pb-1">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-4 sm:gap-8 lg:gap-12 xl:gap-16 items-center justify-items-center">
        
        {/* 1. SHELLS */}
        <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black fill-none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.2" />
            <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth="2.2" />
            <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2.2" />
            <line x1="16" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2.2" />
          </svg>
          <span className="font-semibold md:font-bold tracking-[0.14em] text-[17px] sm:text-[21px] text-black">
            SHELLS
          </span>
        </div>

        {/* 2. SmartFinder */}
        <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity">
          <svg className="w-6 h-6 sm:w-7.5 sm:h-7.5 text-black fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 21.5c-0.8 0-1.5-0.4-1.9-1.1L2.6 7.4C2.2 6.7 2.2 5.8 2.6 5.1 3 4.4 3.8 4 4.6 4h14.8c0.8 0 1.6 0.4 2 1.1 0.4 0.7 0.4 1.6 0 2.3l-7.5 13c-0.4 0.7-1.1 1.1-1.9 1.1zm0-3.6l6-10.4H6l6 10.4z"
            />
          </svg>
          <span className="font-semibold md:font-bold tracking-tight text-[18px] sm:text-[22px] text-black">
            SmartFinder
          </span>
        </div>

        {/* 3. Zoomerr */}
        <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center">
            <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M13 2L4.5 13.5h6l-2 8.5 11-12.5h-6.5l1-7.5z" />
            </svg>
          </div>
          <span className="font-semibold md:font-bold tracking-tight text-[18px] sm:text-[22px] text-black">
            Zoomerr
          </span>
        </div>

        {/* 4. kontrastr */}
        <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-5.5 h-5.5 sm:w-7 sm:h-7 relative flex items-center">
            <div className="w-2 h-5.5 sm:w-2.5 sm:h-6 bg-black rounded-l-xs"></div>
            <div className="w-3.5 h-5.5 sm:w-3.5 sm:h-6 border-[2px] sm:border-[2.2px] border-l-0 border-black rounded-r-full bg-transparent"></div>
          </div>
          <span className="font-semibold md:font-bold tracking-tight text-[18px] sm:text-[22px] text-black lowercase">
            kontrastr
          </span>
        </div>

        {/* 5. WAVESMARATHON (Centered on mobile in the 3rd row) */}
        <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 sm:gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-[2px] sm:gap-[2.5px] h-5 sm:h-6">
            <span className="w-[2px] sm:w-[2.2px] h-2.5 sm:h-3 bg-black rounded-full"></span>
            <span className="w-[2px] sm:w-[2.2px] h-4 sm:h-5 bg-black rounded-full"></span>
            <span className="w-[2px] sm:w-[2.2px] h-5 sm:h-6 bg-black rounded-full"></span>
            <span className="w-[2px] sm:w-[2.2px] h-3.5 sm:h-4.5 bg-black rounded-full"></span>
            <span className="w-[2px] sm:w-[2.2px] h-2.5 sm:h-3 bg-black rounded-full"></span>
            <span className="w-[2px] sm:w-[2.2px] h-4.5 sm:h-5.5 bg-black rounded-full"></span>
            <span className="w-[2px] sm:w-[2.2px] h-1.5 sm:h-2 bg-black rounded-full"></span>
          </div>
          <span className="font-semibold md:font-bold tracking-[0.08em] text-[16px] sm:text-[20px] text-black">
            WAVESMARATHON
          </span>
        </div>

      </div>
    </div>
  );
}
