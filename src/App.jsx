import React from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import MeetingPreview from './components/MeetingPreview';
import PromoBanner from './components/PromoBanner';
import LogoCloud from './components/LogoCloud';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#FAF5F0] overflow-x-hidden">
      {/* TOP SECTION: Full-width Warm Almond/Cream Background */}
      <div className="w-full flex-1 flex flex-col justify-between">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 2xl:px-40 pt-3.5 sm:pt-4.5 lg:pt-5 pb-4 sm:pb-5 flex-1 flex flex-col justify-between">
          {/* Navigation Bar */}
          <div className="w-full mb-4 sm:mb-7 lg:mb-9">
            <Navbar />
          </div>

          {/* Hero Section */}
          <div className="w-full my-auto pb-3 sm:pb-6 lg:pb-9 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 xl:gap-20 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="w-full flex flex-col justify-center">
              <HeroLeft />
            </div>

            {/* Right Column: AI Meeting Assistant Interactive Showcase */}
            <div className="w-full flex justify-center lg:justify-end items-center">
              <MeetingPreview />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Clean Pure White Background */}
      <div className="w-full bg-white flex-shrink-0 border-t border-[#EFEAE2]">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 2xl:px-40 py-6 sm:py-8 flex flex-col gap-6 sm:gap-7">
          {/* Promo Notification Banner */}
          <PromoBanner />

          {/* Partner Logo Cloud */}
          <LogoCloud />
        </div>
      </div>
    </div>
  );
}
