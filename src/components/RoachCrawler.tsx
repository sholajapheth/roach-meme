"use client";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";

interface Roach {
  id: number;
  x: number;
  y: number;
  direction: number;
  speed: number;
  size: number;
  crushed?: boolean;
}

const GAME_DURATION = 7; // seconds
const INITIAL_ROACHES = 15;

function getInitialRoaches() {
  return Array.from({ length: INITIAL_ROACHES }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    direction: Math.random() * 360,
    speed: 0.5 + Math.random() * 1.5,
    size: 0.8 + Math.random() * 0.4,
    crushed: false,
  }));
}

export default function RoachCrawler() {
  const [roaches, setRoaches] = useState<Roach[]>(getInitialRoaches());
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [gameActive, setGameActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Load high score from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("roach_high_score");
    if (stored) setHighScore(Number(stored));
  }, []);

  // Timer logic
  useEffect(() => {
    if (!gameActive) return;
    if (timer <= 0) {
      setGameActive(false);
      setShowModal(true);
      // Check for high score
      if (score > highScore) {
        setHighScore(score);
        setIsNewHighScore(true);
        localStorage.setItem("roach_high_score", String(score));
      } else {
        setIsNewHighScore(false);
      }
      return;
    }
    timerRef.current = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(timerRef.current!);
  }, [gameActive, timer, score, highScore]);

  // Roach animation loop
  useEffect(() => {
    if (!gameActive) return;
    animationRef.current = setInterval(() => {
      setRoaches((prevRoaches) =>
        prevRoaches.map((roach) => {
          if (roach.crushed) return roach;
          const newX = roach.x + Math.cos((roach.direction * Math.PI) / 180) * roach.speed;
          const newY = roach.y + Math.sin((roach.direction * Math.PI) / 180) * roach.speed;
          let newDirection = roach.direction;
          if (newX <= 0 || newX >= window.innerWidth) {
            newDirection = 180 - roach.direction;
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newDirection = -roach.direction;
          }
          if (Math.random() < 0.02) {
            newDirection += (Math.random() - 0.5) * 90;
          }
          return {
            ...roach,
            x: Math.max(0, Math.min(window.innerWidth, newX)),
            y: Math.max(0, Math.min(window.innerHeight, newY)),
            direction: newDirection,
          };
        })
      );
    }, 50);
    return () => clearInterval(animationRef.current!);
  }, [gameActive]);

  // Handle roach click (crush)
  const handleCrush = (id: number) => {
    if (!gameActive) return;
    setRoaches((prev) =>
      prev.map((roach) =>
        roach.id === id ? { ...roach, crushed: true } : roach
      )
    );
    setScore((prev) => prev + 1);
    // Play sound with debug logging
    if (audioRef.current) {
      try {
        console.log('Crush: Attempting to play roach crush sound');
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            // eslint-disable-next-line no-console
            console.warn('Roach crush sound failed to play:', err);
          });
        }
        // eslint-disable-next-line no-console
        console.log('Attempted to play roach crush sound');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Error playing roach crush sound:', err);
      }
    }
    // Remove after animation
    setTimeout(() => {
      setRoaches((prev) => prev.filter((roach) => roach.id !== id));
    }, 400);
  };

  // Start game on first click
  const handleStart = () => {
    setScore(0);
    setTimer(GAME_DURATION);
    setRoaches(getInitialRoaches());
    setShowModal(false);
    setIsNewHighScore(false);
    setGameActive(true);
  };

  // Get window size for confetti
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Score & Timer Display - only show when game is active */}
      {gameActive && (
        <div className="fixed top-4 right-6 z-50 flex flex-col items-end gap-2 select-none pointer-events-none">
          <div className="bg-black bg-opacity-70 text-yellow-300 font-bold px-5 py-2 rounded-full text-lg shadow-lg" style={{fontFamily: 'GoodDog, sans-serif'}}>
            Score: {score}
          </div>
          <div className="bg-black bg-opacity-70 text-cyan-200 font-bold px-4 py-1 rounded-full text-base shadow" style={{fontFamily: 'GoodDog, sans-serif'}}>
            Time: {timer}s
          </div>
          <div className="bg-black bg-opacity-60 text-green-300 font-bold px-4 py-1 rounded-full text-base shadow" style={{fontFamily: 'GoodDog, sans-serif'}}>
            High Score: {highScore}
          </div>
        </div>
      )}
      {/* Play Game Button in top-right when not active and not showing modal */}
      {!gameActive && !showModal && (
        <div className="fixed top-8 right-20 md:right-6 z-50 flex flex-col items-end gap-2 select-none">
          <button
            className="bg-yellow-400 text-black font-bold text-base px-4 py-1 rounded-full shadow-lg border-2 border-yellow-700 hover:bg-yellow-300 transition"
            onClick={handleStart}
            style={{fontFamily: 'GoodDog, sans-serif'}}>
            Play Game
          </button>
        </div>
      )}
      {/* Sound Effect */}
      <audio ref={audioRef} src="/web_assets/roach_crush.mp3" preload="auto" />
      {/* TEMP: Manual sound test button for debugging */}
      {typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' && (
        <button
          style={{ position: 'fixed', bottom: 10, left: 10, zIndex: 2000 }}
          onClick={() => {
            if (audioRef.current) {
              console.log('Manual test: Attempting to play roach crush sound');
              audioRef.current.currentTime = 0;
              audioRef.current.volume = 1;
              audioRef.current.play();
            }
          }}
        >
          Test Roach Sound
        </button>
      )}
      {/* Roaches */}
      <div className="fixed inset-0 z-[1000]" style={{ pointerEvents: gameActive ? undefined : "none" }}>
        {roaches.map((roach) => (
          <div
            key={roach.id}
            className={`absolute transition-transform transition-opacity duration-300 select-none ${
              roach.crushed ? "scale-50 opacity-0 rotate-12" : gameActive ? "hover:scale-110 cursor-pointer" : "opacity-60 cursor-default"
            }`}
            style={{
              left: `${roach.x}px`,
              top: `${roach.y}px`,
              transform: `translate(-50%, -50%) rotate(${roach.direction}deg) scale(${roach.size})`,
              fontSize: "24px",
              pointerEvents: roach.crushed ? "none" : gameActive ? "auto" : "none",
            }}
            onClick={() => gameActive && handleCrush(roach.id)}
            aria-label="Crush the roach"
          >
            🪳
          </div>
        ))}
      </div>
      {/* End Game Modal */}
      {showModal && (
        <>
          {/* Confetti Animation */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={250}
            recycle={false}
            className="fixed inset-0 z-[1200] pointer-events-none"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[1100]" style={{background: "rgba(0,0,0,0.7)"}}>
            <div className="bg-[#1a1005] border-4 border-yellow-700 rounded-2xl p-10 flex flex-col items-center shadow-2xl" style={{minWidth: 320}}>
              <div className="text-3xl text-yellow-300 font-bold mb-4" style={{fontFamily: 'GoodDog, sans-serif'}}>
                Game Over!
              </div>
              <div className="text-xl text-white mb-2">Your Score: <span className="text-yellow-300 font-bold">{score}</span></div>
              <div className="text-lg text-green-300 mb-2">High Score: <span className="font-bold">{highScore}</span></div>
              {isNewHighScore && (
                <div className="text-pink-400 text-lg font-bold mb-2">🎉 New High Score! 🎉</div>
              )}
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-yellow-400 text-black font-bold text-lg px-6 py-2 rounded-xl border-2 border-yellow-700 hover:bg-yellow-300 transition"
                  onClick={handleStart}
                  style={{fontFamily: 'GoodDog, sans-serif'}}
                >
                  Play Again
                </button>
                <button
                  className="bg-gray-300 text-black font-bold text-lg px-6 py-2 rounded-xl border-2 border-gray-500 hover:bg-gray-200 transition"
                  onClick={() => setShowModal(false)}
                  style={{fontFamily: 'GoodDog, sans-serif'}}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
} 