import React, { useState, useEffect } from 'react';
import Snowfall from './components/Snowfall';
import GiftBox from './components/GiftBox';
import Celebration from './components/Celebration';

enum Stage {
  INITIAL,
  OPENING,
  CELEBRATING,
  FINISHED
}

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>(Stage.INITIAL);
  const [fadeBlack, setFadeBlack] = useState(false);

  // Transition from Opening to Celebrating
  const handleOpenGift = () => {
    setStage(Stage.OPENING);
    // Short delay for the gift opening animation to finish visually
    setTimeout(() => {
      setStage(Stage.CELEBRATING);
    }, 500);
  };

  // Handle the auto-close / finish logic
  useEffect(() => {
    if (stage === Stage.CELEBRATING) {
      // Show the celebration for 8 seconds, then fade out
      const timer = setTimeout(() => {
        setFadeBlack(true);
        setTimeout(() => {
            setStage(Stage.FINISHED);
            // Attempt to close window (often blocked by browsers, but worth a try)
            try {
                window.close();
            } catch (e) {
                console.log("Auto-close blocked by browser");
            }
        }, 2000); // 2 seconds for fade to black effect
      }, 8000); 

      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Render the "The End" screen
  if (stage === Stage.FINISHED) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center text-gray-500 font-light tracking-widest">
         ❤️ 
      </div>
    );
  }

  return (
    <div className={`relative h-screen w-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden transition-opacity duration-2000 ${fadeBlack ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Elements */}
      <Snowfall />
      
      {/* Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {stage === Stage.INITIAL && (
            <GiftBox onOpen={handleOpenGift} />
        )}
        
        {stage === Stage.CELEBRATING && (
            <Celebration />
        )}
      </div>

      {/* Decorative corners */}
      <div className="fixed top-0 left-0 w-32 h-32 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-green-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default App;