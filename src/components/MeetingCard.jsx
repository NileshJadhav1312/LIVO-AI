 
import React from "react";

/* ---------- Waveform (separate, reusable) ----------
   Pass `src` to use your own wave image (png/svg),
   otherwise it draws the bars itself. */
const WAVE_HEIGHTS = [
  6, 10, 15, 20, 14, 19, 28, 22, 32, 42, 30, 48, 52, 38, 50, 54, 44, 30, 48, 52,
  35, 25, 40, 28, 20, 30, 18, 22, 12, 15, 8, 10,
];

export function Waveform({ src, heights = WAVE_HEIGHTS, className = "" }) {
  if (src) {
    return <img src={src} alt="Audio waveform" className={`h-12 w-full object-contain ${className}`} />;
  }
  return (
    <div className={`flex h-12 w-full items-center justify-center gap-[3px] ${className}`} aria-label="Audio waveform">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[2px] rounded-full bg-white sm:w-[2.5px]"
          style={{ height: `${h}px`, opacity: i >= 9 && i <= 21 ? 1 : 0.4 }}
        />
      ))}
    </div>
  );
}

/* ---------- Icons ---------- */
export const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);

export const SparkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]">
    <path d="M12 2c.6 4.8 2.7 8 8 10-5.3 2-7.4 5.2-8 10-.6-4.8-2.7-8-8-10 5.3-2 7.4-5.2 8-10z" />
  </svg>
);

export const StarIcon = () => (
  <svg className="h-3 w-3 fill-[#FF492C]" viewBox="0 0 20 20">
    <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
  </svg>
);

export default function MeetingCard({ className = "", waveSrc, avatarSrc }) {
  return (
    /* Fluid width: shrinks on small phones, caps at 370px */
    <div className={`relative mx-auto w-[min(86vw,370px)] ${className}`}>
      {/* Rating badge */}
      <div className="absolute -right-3 -top-4 z-40 sm:-right-8">
        <div className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white/95 px-2.5 py-1.5 shadow-xl shadow-purple-900/10 backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-tr from-[#FF492C] to-[#E93B77] sm:h-6 sm:w-6">
            <span className="text-[11px] font-black leading-none tracking-tighter text-white sm:text-[12px]">
              G<span className="align-super text-[7px] sm:text-[8px]">2</span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <span className="text-[10px] font-bold tracking-tight text-black sm:text-[11px]">5.0 / 5.0</span>
            </div>
            <div className="text-[8px] font-semibold tracking-tight text-[#6B6B72] sm:text-[8.5px]">
              #1 Rated • 6,000+ Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Phone card */}
      <div className="relative flex flex-col overflow-visible rounded-[30px] border border-[#E9E4DE] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.14)] sm:rounded-[42px]">
        {/* Dark header */}
        <div className="relative rounded-t-[30px] bg-[#101014] px-4 pb-4 pt-5 text-white sm:rounded-t-[42px] sm:px-5">
          <div className="flex items-start justify-between">
            <h2 className="text-[clamp(14px,4vw,16px)] font-semibold leading-tight tracking-[-0.01em]">
              End-of-Sprint<br />Meeting
            </h2>
            <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xs tracking-widest text-gray-300 transition hover:bg-white/20 hover:text-white">
              •••
            </button>
          </div>

          {/* Waveform + playhead */}
          <div className="relative mt-4">
            <Waveform src={waveSrc} />
            <div className="pointer-events-none absolute inset-y-0 left-[48%] z-10 flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48]" />
              <span className="w-[2px] flex-1 bg-[#E11D48] shadow-[0_0_8px_#E11D48]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48]" />
            </div>
          </div>

          <div className="mt-2 flex justify-between px-0.5 font-mono text-[8.5px] font-medium tracking-wider text-gray-500 sm:text-[9px]">
            <span>05:15</span>
            <span>05:30</span>
            <span className="font-bold text-[#E11D48]">05:45</span>
            <span>06:00</span>
            <span>06:15</span>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold tracking-tight text-black sm:text-[13px]">
            <ClockIcon />
            <span>00:05:39</span>
          </div>
          <div className="flex items-center gap-1 text-[12px] font-semibold tracking-tight text-[#D92662] sm:text-[13px]">
            <SparkIcon />
            <span>Analysing...</span>
          </div>
        </div>

        {/* Floating speaker card: hangs left, but less on small screens */}
        <div className="relative z-30 -ml-3 -mt-2.5 w-[calc(100%-0.5rem)] sm:-ml-12 sm:w-[calc(100%-1rem)]">
          <div className="rounded-[20px] border border-gray-100/90 bg-white p-3 shadow-[0_16px_36px_rgba(0,0,0,0.15)] sm:rounded-[22px] sm:p-4">
            <div className="flex flex-wrap items-center gap-2">
              <img
                src={avatarSrc || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"}
                alt="Conrad"
                className="h-6 w-6 rounded-full object-cover ring-1 ring-black/10"
              />
              <span className="rounded-full bg-black px-2.5 py-0.5 text-[10.5px] font-semibold tracking-tight text-white">Conrad</span>
              <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#9333EA] to-[#EC4899] px-2.5 py-0.5 text-[9.5px] font-semibold tracking-tight text-white">
                <div className="flex h-2.5 items-center gap-[1.5px]">
                  <span className="h-2.5 w-[1.5px] rounded-full bg-white" />
                  <span className="h-1.5 w-[1.5px] rounded-full bg-white" />
                  <span className="h-2.5 w-[1.5px] rounded-full bg-white" />
                </div>
                <span>05:45</span>
              </div>
            </div>
            <p className="mt-2.5 text-[clamp(12.5px,3.6vw,14px)] font-bold leading-[1.3] tracking-tight text-[#111114]">
              The only thing left is to get the final illustration, and
            </p>
          </div>
        </div>

        {/* Transcript */}
        <div className="space-y-3 bg-white px-4 pb-11 pt-3 text-left sm:px-5">
          <p className="text-[12px] font-medium leading-[1.35] tracking-tight text-[#18181B] sm:text-[12.5px]">
            Perfect. Any blockers on your side, Liam?
          </p>

          <div>
            <div className="flex items-center gap-1.5 text-[9.5px] font-semibold tracking-tight text-[#71717A]">
              <span className="text-[#27272A]">Sofia</span>
              <span>04:34</span>
            </div>
            <p className="mt-0.5 text-[11.5px] leading-[1.35] tracking-tight text-[#3F3F46] sm:text-[12px]">
              Go with the slim variant. The thick one is only for the web dashboard; mobile uses the lighter style.
            </p>
          </div>

          <div className="opacity-45">
            <div className="flex items-center gap-1.5 text-[9.5px] font-semibold tracking-tight text-[#71717A]">
              <span className="text-[#27272A]">Conrad</span>
              <span>03:55</span>
            </div>
            <p className="mt-0.5 text-[11.5px] leading-[1.35] tracking-tight text-[#71717A] sm:text-[12px]">
              Quick question regarding
            </p>
          </div>
        </div>

        {/* Pause button */}
        <div className="absolute -bottom-5 left-1/2 z-40 -translate-x-1/2">
          <button
            aria-label="Pause meeting recording"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-black text-white shadow-xl transition-transform active:scale-95"
          >
            <div className="flex items-center gap-[3.5px]">
              <span className="h-4 w-[2.5px] rounded-full bg-white" />
              <span className="h-4 w-[2.5px] rounded-full bg-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}