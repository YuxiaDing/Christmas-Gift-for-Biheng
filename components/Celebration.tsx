import React, { useEffect, useState } from 'react';

const Celebration: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500); // Wait for tree to "grow" a bit
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20">
      
      {/* Christmas Tree Construction */}
      <div className="relative mb-8 animate-fade-in-up">
        {/* Star */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30">
             <div className="w-12 h-12 bg-yellow-300 rounded-full blur-md absolute animate-pulse"></div>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="gold" className="relative drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] animate-pulse">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
             </svg>
        </div>

        {/* Tree Layers */}
        <div className="flex flex-col items-center">
             <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-green-600 drop-shadow-lg -mb-6 z-20"></div>
             <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[80px] border-l-transparent border-r-transparent border-b-green-700 drop-shadow-lg -mb-8 z-10"></div>
             <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-b-[100px] border-l-transparent border-r-transparent border-b-green-800 drop-shadow-lg z-0"></div>
             {/* Trunk */}
             <div className="w-12 h-16 bg-amber-900 rounded-sm mt-0"></div>
        </div>

        {/* Ornaments (Absolute positioning on top of tree) */}
        <div className="absolute top-10 left-1/2 w-4 h-4 bg-red-500 rounded-full -translate-x-6 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute top-20 left-1/2 w-4 h-4 bg-blue-400 rounded-full translate-x-4 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-32 left-1/2 w-5 h-5 bg-purple-400 rounded-full -translate-x-8 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-28 left-1/2 w-4 h-4 bg-yellow-400 rounded-full translate-x-10 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
      </div>

      {/* Message */}
      <div className={`text-center transform transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
        <h1 className="text-4xl md:text-6xl font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-200 to-red-400 font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-pulse">
          碧珩宝宝
        </h1>
        <h2 className="text-3xl md:text-5xl font-handwriting text-white drop-shadow-lg">
          圣诞节快乐!
        </h2>
        <div className="mt-6 flex justify-center gap-2">
            <span className="text-2xl animate-spin-slow">🎄</span>
            <span className="text-2xl animate-pulse">🎁</span>
            <span className="text-2xl animate-bounce">❄️</span>
        </div>
      </div>

    </div>
  );
};

export default Celebration;