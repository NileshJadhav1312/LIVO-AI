import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-center text-[15px] sm:text-[16.5px]">
      <span className="text-[#141416] font-semibold tracking-[-0.01em]">
        Enjoy 50% off premium features for first 3 months — 21 days remaining
      </span>
      <a
        href="#pricing"
        className="inline-flex items-center gap-2 font-semibold text-[#A855F7] hover:text-[#9333EA] transition-colors group cursor-pointer"
      >
        {/* Circled arrow */}
        <div className="w-5 h-5 rounded-full border border-[#A855F7] group-hover:border-[#9333EA] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowRight className="w-3 h-3 text-[#A855F7] group-hover:text-[#9333EA] stroke-[2.4]" />
        </div>

        {/* Text */}
        <span>Start 14 days trial</span>
      </a>
    </div>
  );
}
