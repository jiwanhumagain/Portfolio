import React from 'react';

const HireMeButton = () => {
  // Create text for the circle
  const text = "HIRE ME • HIRE ME • ";
  const characters = text.split('');
  const numChars = characters.length;
  const radius = 60; // Adjust this value to change the text distance from center

  return (
    <div className="relative w-44 h-44 cursor-pointer group">
      {/* Main circle with rotating text */}
      <div className="absolute inset-0 rounded-full bg-black flex items-center justify-center animate-spin-slow">
        {/* Circular text */}
        {characters.map((char, i) => {
          const angle = (i * 360) / numChars;
          // Convert angle to radians
          const angleInRad = (angle * Math.PI) / 180;
          // Calculate position
          const x = radius * Math.cos(angleInRad);
          const y = radius * Math.sin(angleInRad);
          
          return (
            <span
              key={i}
              className="absolute text-xl font-bold text-green-400 tracking-widest"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
                transformOrigin: 'center',
              }}
            >
              {char}
            </span>
          );
        })}
        
        {/* Center circle with arrow */}
        <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center z-10 group-hover:scale-95 transition-transform">
          <svg 
            className="w-6 h-6 text-white transform rotate-45 group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HireMeButton;