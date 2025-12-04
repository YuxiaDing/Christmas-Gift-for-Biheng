import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full z-20 relative animate-fade-in">
      <div 
        onClick={handleClick}
        className={`cursor-pointer transform transition-all duration-700 ease-in-out ${isOpening ? 'scale-150 opacity-0 rotate-12' : 'hover:scale-110 animate-bounce'}`}
      >
        <div className="relative">
            {/* Glow effect behind the box */}
            <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20 rounded-full"></div>
            <Package 
                size={120} 
                className="text-red-500 drop-shadow-lg relative z-10" 
                strokeWidth={1}
                fill="#ef4444"
                stroke="#fee2e2"
            />
            {/* Bow ribbon detail simulation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-yellow-400 z-10 opacity-80"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-4 bg-yellow-400 z-10 opacity-80"></div>
        </div>
      </div>
      <p className={`mt-8 text-white text-xl font-handwriting tracking-widest transition-opacity duration-500 ${isOpening ? 'opacity-0' : 'opacity-80'}`}>
        点击拆开礼物
      </p>
    </div>
  );
};

export default GiftBox;