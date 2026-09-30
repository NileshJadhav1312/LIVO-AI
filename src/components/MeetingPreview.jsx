 
import React, { useState } from 'react';
import meetingScreenshot from '../assets/meeting-screenshot.png';
import conradImg from '../assets/participants/person-conrad.jpg';
import sofiaImg from '../assets/participants/person-sofia.jpg';
import elenaImg from '../assets/participants/person-elena.jpg';
import sarahImg from '../assets/participants/person-sarah.jpg';

/* ---------- Icons (sized by parent, so they scale with the button) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  className: 'h-[58%] w-[58%] fill-none stroke-current',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function SpeakerIcon({ active }) {
  return (
    <svg {...iconProps}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      {active ? (
        <>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </>
      ) : (
        <>
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </>
      )}
    </svg>
  );
}

function VideoIcon({ active }) {
  return (
    <svg {...iconProps}>
      {active ? (
        <>
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
        </>
      ) : (
        <>
          <path d="m16 16 6 4V4l-6 4" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </>
      )}
    </svg>
  );
}

/* Round control button: fluid size from ~14px on phones to 28px on desktop */
function ControlButton({ on, onToggle, onLabel, offLabel, children }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`flex h-[clamp(14px,2.8vw,28px)] w-[clamp(14px,2.8vw,28px)] cursor-pointer items-center justify-center rounded-full text-white backdrop-blur-md transition-all duration-200 ${
        on ? 'bg-black/60 hover:bg-black/80' : 'bg-red-500/85 hover:bg-red-600'
      }`}
      aria-label={on ? onLabel : offLabel}
      title={on ? onLabel : offLabel}
    >
      {children}
    </button>
  );
}

/* ---------- Participant card ---------- */
function ParticipantCard({ name, image, isActive = false, containerClassName = '' }) {
  const [speakerOn, setSpeakerOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  const photo = (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-stone-200 ${
        isActive
          ? 'rounded-[clamp(12px,2.2vw,22px)] shadow-inner'
          : 'rounded-[clamp(14px,2.6vw,24px)] shadow-sm'
      }`}
    >
      <img
        src={image}
        alt={name}
        className={`h-full w-full object-cover ${!videoOn ? 'brightness-75 grayscale' : ''}`}
      />
      <div className="absolute bottom-[4%] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[clamp(2px,0.5vw,6px)]">
        <ControlButton
          on={speakerOn}
          onToggle={() => setSpeakerOn(!speakerOn)}
          onLabel={`Mute ${name}`}
          offLabel={`Unmute ${name}`}
        >
          <SpeakerIcon active={speakerOn} />
        </ControlButton>
        <ControlButton
          on={videoOn}
          onToggle={() => setVideoOn(!videoOn)}
          onLabel={`Turn off ${name}'s camera`}
          offLabel={`Turn on ${name}'s camera`}
        >
          <VideoIcon active={videoOn} />
        </ControlButton>
      </div>
    </div>
  );

  return (
    <div className={`z-20 w-[25%] sm:w-[26%] select-none ${containerClassName}`}>
      {isActive ? (
        /* Active speaker: gradient border + warm inner frame */
        <div className="rounded-[clamp(14px,2.8vw,28px)] bg-gradient-to-tr from-[#a855f7] via-[#ec4899] to-[#fb923c] p-[1px] shadow-lg shadow-pink-500/20 sm:p-[1.5px]">
          <div className="rounded-[clamp(13px,2.6vw,26px)] bg-[#FAF5F0] p-0.5 sm:p-1.5">{photo}</div>
        </div>
      ) : (
        photo
      )}
    </div>
  );
}

/* ---------- Main ---------- */
export default function MeetingPreview() {
  return (
    <div className="flex w-full items-center justify-center px-2 py-4 sm:px-4 sm:py-6 lg:justify-end lg:px-0">
      {/* Everything inside is sized in % of this box, so the whole
          composition scales smoothly with consistent gaps on every screen. */}
      <div className="relative mx-auto flex w-full max-w-[340px] items-center justify-center min-[420px]:max-w-[420px] sm:max-w-[500px] md:max-w-[530px] lg:mx-0 lg:max-w-[530px] xl:max-w-[600px]">
        <ParticipantCard
          name="Conrad"
          image={conradImg}
          isActive
          containerClassName="absolute left-0 top-[4%] sm:top-[6%]"
        />
        <ParticipantCard
          name="Sofia"
          image={sofiaImg}
          containerClassName="absolute right-0 top-[6%] sm:top-[8%]"
        />
        <ParticipantCard
          name="Elena"
          image={elenaImg}
          containerClassName="absolute left-0 bottom-[12%] sm:bottom-[16%] lg:bottom-[20%]"
        />
        <ParticipantCard
          name="Sarah"
          image={sarahImg}
          containerClassName="absolute right-0 bottom-[12%] sm:bottom-[16%] lg:bottom-[20%]"
        />

        {/* Phone screenshot */}
        <div className="relative z-10 flex w-[58%] items-center justify-center sm:w-[55%] lg:w-[56%]">
          <img
            src={meetingScreenshot}
            alt="Livo AI Meeting Assistant"
            className="pointer-events-none h-auto w-full select-none rounded-[24px] object-contain drop-shadow-xl sm:rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
}