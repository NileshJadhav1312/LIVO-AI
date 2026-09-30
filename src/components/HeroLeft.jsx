import React from 'react';
import { ArrowRight } from 'lucide-react';

const Dot = () => <span className="text-[10px] text-[#88888F]">•</span>;

export default function HeroLeft() {
  return (
    /* Centered on mobile/tablet, left-aligned from lg up */
    <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center text-center lg:mx-0 lg:items-start lg:text-left">
      {/* Headline: fluid size shrinks/grows with the viewport */}
      <h1 className="text-[clamp(2.4rem,9.5vw,5.6rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[#121214] lg:text-[clamp(3.6rem,5.6vw,5.6rem)]">
        <span className="bg-gradient-to-r from-[#6D28D9] via-[#C026D3] to-[#F97316] bg-clip-text text-transparent">
          AI analysis
        </span>
        <br />
        for real-time
        <br />
        discussions
      </h1>

      {/* Paragraph */}
      <p className="mt-5 max-w-[500px] text-[clamp(14.5px,2.2vw,17.5px)] font-normal leading-[1.65] tracking-[-0.01em] text-[#55555D] sm:mt-7">
        Livo AI records your meetings, recognizes who's speaking, and provides
        real-time insights and live recommendations — all without taking manual notes.
      </p>

      {/* Buttons: wrap and center on small screens */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-4 lg:justify-start">
        {/* Primary */}
        <div className="group relative shrink-0 cursor-pointer rounded-full border border-transparent p-[1.5px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:via-[#EC4899] hover:to-[#F97316] hover:shadow-md hover:shadow-orange-500/15">
          <div className="rounded-full bg-[#FAF5F0] p-[3px]">
            <button className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C026D3] to-[#EA580C] px-5 py-3 text-[clamp(14px,2vw,16px)] font-semibold tracking-[-0.01em] text-white shadow-[0_6px_20px_rgba(234,88,12,0.22)] transition-all duration-200 hover:shadow-[0_8px_26px_rgba(234,88,12,0.32)] active:scale-[0.98] sm:gap-3 sm:px-7 sm:py-3.5">
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-white/70 bg-white/10 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.2] text-white" />
              </div>
              <span>Start for free</span>
            </button>
          </div>
        </div>

        {/* Secondary */}
        <div className="group relative shrink-0 cursor-pointer rounded-full border border-transparent p-[1.5px] transition-all duration-300 hover:border-black/25">
          <div className="rounded-full bg-[#FAF5F0] p-[3px]">
            <button className="cursor-pointer whitespace-nowrap rounded-full border border-[#D1CCC5] bg-transparent px-5 py-3 text-[clamp(14px,2vw,16px)] font-semibold tracking-[-0.01em] text-[#141416] transition-all duration-300 group-hover:border-black/35 group-hover:bg-white active:scale-[0.98] sm:px-7 sm:py-3.5">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="mt-6 flex w-full max-w-[390px] flex-col gap-2.5 text-[clamp(12.5px,1.8vw,13.5px)] font-semibold tracking-[-0.01em] text-[#1A1A1E] sm:mt-8">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-between">
          <span className="flex items-center gap-1.5"><Dot />31-day free trial</span>
          <span className="flex items-center gap-1.5"><Dot />No credit card required</span>
        </div>
        <div className="flex w-full items-center justify-center">
          <span className="flex items-center gap-1.5"><Dot />Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}