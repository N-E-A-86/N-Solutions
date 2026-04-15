import React from 'react';

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-end font-sans font-bold text-4xl leading-none tracking-tighter">
        <span className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">N</span>
        <span className="text-[#A855F7] drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] -ml-1">S</span>
      </div>
      <span className="text-[0.5rem] tracking-[0.2em] text-white mt-1 font-medium">N SOLUTIONS TECH</span>
    </div>
  );
}
