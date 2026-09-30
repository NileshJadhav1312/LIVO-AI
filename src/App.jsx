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
        <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 py-6 sm:py-8 flex-1 flex flex-col justify-between">
          {/* Navigation Bar */}
          <div className="w-full mb-8 sm:mb-12 lg:mb-14">
            <Navbar />
          </div>

          {/* Hero Section */}
          <div className="w-full my-auto pb-8 sm:pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
              <HeroLeft />
            </div>

            {/* Right Column: AI Meeting Assistant Interactive Showcase */}
            <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-center">
              <MeetingPreview />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Clean Pure White Background */}
      <div className="w-full bg-white flex-shrink-0 border-t border-[#EFEAE2]">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 py-6 sm:py-8 flex flex-col gap-6 sm:gap-7">
          {/* Promo Notification Banner */}
          <PromoBanner />

          {/* Partner Logo Cloud */}
          <LogoCloud />
        </div>
      </div>
    </div>
  );
}
