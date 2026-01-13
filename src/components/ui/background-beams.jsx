import React from 'react'

export function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#3B82F6]/20 via-[#0F172A]/50 to-[#0F172A]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px]"></div>
    </div>
  )
}