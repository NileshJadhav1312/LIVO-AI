 
import React, { useState } from 'react';
import { Menu, X, Check, ArrowRight } from 'lucide-react';
import logoutIcon from '../assets/logout.png';
import profileIcon from '../assets/profile.png';

const navLinks = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Use cases', href: '#use-cases' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleLogoutToggle = () => {
    triggerToast(isLoggedIn ? 'Logged out successfully' : 'Welcome back, Nilesh!');
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="relative z-30 w-full">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed right-3 top-3 z-50 flex max-w-[calc(100vw-1.5rem)] items-center gap-2.5 rounded-xl border border-white/10 bg-[#18181B] px-4 py-2.5 text-[13px] font-medium text-white shadow-2xl sm:right-5 sm:top-5 sm:text-[14px]">
          <Check className="h-4 w-4 shrink-0 stroke-[2.5] text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Profile modal */}
      {showProfileModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setShowProfileModal(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-sm flex-col gap-4 overflow-y-auto rounded-3xl border border-black/10 bg-white p-5 shadow-2xl sm:gap-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-purple-700 sm:text-[13px]">
                Pro Member
              </span>
              <button
                onClick={() => setShowProfileModal(false)}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-black/60 hover:bg-black/5 hover:text-black"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#FAF5F0] sm:h-14 sm:w-14">
                <img src={profileIcon} alt="Profile" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[17px] font-bold text-black sm:text-[18px]">Nilesh</h3>
                <p className="truncate text-[13px] text-black/60 sm:text-[14px]">nilesh@example.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-2xl bg-[#FAF5F0] p-3.5 text-[13px] sm:text-[13.5px]">
              <div className="flex justify-between text-black/70">
                <span>Plan</span>
                <span className="font-semibold text-black">Pro Annual</span>
              </div>
              <div className="flex justify-between text-black/70">
                <span>Trial remaining</span>
                <span className="font-semibold text-purple-700">21 days</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setShowProfileModal(false);
                  triggerToast('Opening account settings');
                }}
                className="w-full cursor-pointer rounded-xl bg-black py-3 text-[14px] font-semibold text-white transition-colors hover:bg-black/85 sm:text-[14.5px]"
              >
                Manage Subscription
              </button>
              <button
                onClick={() => {
                  handleLogoutToggle();
                  setShowProfileModal(false);
                }}
                className="w-full cursor-pointer rounded-xl border border-black/15 py-2.5 text-[14px] font-semibold text-black transition-colors hover:bg-black/5 sm:text-[14.5px]"
              >
                {isLoggedIn ? 'Log out' : 'Log in'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header row: flex so links never wrap or squeeze */}
      <div className="flex items-center justify-between gap-3 py-2 sm:py-3">
        {/* Logo */}
        <a href="#" className="group flex shrink-0 items-center" aria-label="Livo AI Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-black shadow-md transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-[15px] lg:h-12 lg:w-12 lg:rounded-[16px]">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white lg:h-7 lg:w-7">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H15C17.7614 20 20 17.7614 20 15V13C20 10.2386 17.7614 8 15 8H8.5V6C8.5 4.89543 7.60457 4 6.5 4H6ZM8.5 11.5H14.5C15.8807 11.5 17 12.6193 17 14C17 15.3807 15.8807 16.5 14.5 16.5H8.5V11.5Z"
              />
            </svg>
          </div>
        </a>

        {/* Desktop links: fluid font + gap, never wrap */}
        <div className="hidden flex-1 items-center justify-center gap-[clamp(14px,2.8vw,48px)] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[clamp(14px,1.55vw,19.5px)] font-semibold tracking-[-0.015em] text-[#18181B] transition-colors hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3.5">
          <button
            onClick={handleLogoutToggle}
            aria-label={isLoggedIn ? 'Log out' : 'Log in'}
            title={isLoggedIn ? 'Log out' : 'Log in'}
            className="hidden h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-[14px] bg-white shadow-sm transition-all duration-200 hover:bg-white/90 active:scale-95 md:flex lg:h-11 lg:w-11 lg:rounded-[16px]"
          >
            <img src={logoutIcon} alt="" className="h-5 w-5 object-contain" />
          </button>

          <button
            onClick={() => setShowProfileModal(true)}
            aria-label="Account"
            title="Account Profile"
            className="hidden h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-[14px] bg-white shadow-sm transition-all duration-200 hover:bg-white/90 active:scale-95 md:flex lg:h-11 lg:w-11 lg:rounded-[16px]"
          >
            <img src={profileIcon} alt="" className="h-[22px] w-[22px] object-contain" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer rounded-xl p-2 text-black hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown: absolute overlay so it never shifts/pushes the main screen downwards */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop to dismiss when clicking outside */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating dropdown card */}
          <div className="absolute left-0 right-0 top-full z-50 mt-2.5 flex flex-col gap-2.5 rounded-2xl border border-black/10 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md sm:p-4 md:hidden animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-2.5 py-2.5 text-[15px] font-semibold tracking-tight text-black transition-colors hover:bg-black/5"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-35" />
                </a>
              ))}
            </div>

            <div className="h-px bg-black/10" />

            <button
              onClick={() => {
                setShowProfileModal(true);
                setMobileMenuOpen(false);
              }}
              className="flex w-full cursor-pointer items-center justify-between rounded-xl bg-black/[0.03] p-2.5 text-left transition-all hover:bg-black/5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black/5 bg-white shadow-sm">
                  <img src={profileIcon} alt="" className="h-[18px] w-[18px] object-contain" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold leading-tight text-black">My Account</div>
                  <div className="text-[11.5px] leading-tight text-black/60">Signed in as Nilesh</div>
                </div>
              </div>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10.5px] font-semibold text-purple-700">Pro</span>
            </button>

            <button
              onClick={() => {
                handleLogoutToggle();
                setMobileMenuOpen(false);
              }}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl border border-black/10 p-2.5 text-left transition-all hover:bg-black/5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black/5 bg-white shadow-sm">
                <img src={logoutIcon} alt="" className="h-4 w-4 object-contain" />
              </div>
              <div>
                <div className="text-[13.5px] font-semibold leading-tight text-black">{isLoggedIn ? 'Log out' : 'Log in'}</div>
                <div className="text-[11.5px] leading-tight text-black/60">
                  {isLoggedIn ? 'Sign out of your session' : 'Sign in to your account'}
                </div>
              </div>
            </button>
          </div>
        </>
      )}
    </nav>
  );
}