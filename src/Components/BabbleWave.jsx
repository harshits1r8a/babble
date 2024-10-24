import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Wave from "react-wavify"; // Import the Wave component
import { Link } from "react-router-dom";

const BabbleWave = () => {
  const [count, setCount] = useState(3);
  const [showWaves, setShowWaves] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer); // Cleanup timer
    } else {
      setShowWaves(true); // Trigger waves after timer reaches 0
    }
  }, [count]);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black">
      {/* Timer or Stop Text */}
      <Link to={'/babblereset'} className="relative z-10 bg-white w-48 h-48 rounded-full flex justify-center items-center text-4xl text-black ">
        {count > 0 ? count : "Stop"}
      </Link>

      {/* Waves Animation using react-wavify */}
      {showWaves && (
        <div className="absolute bottom-0 left-0 w-full h-[60vh] overflow-hidden ">
          <Wave
            fill="#FFCC99"
            paused={false}
            options={{
              height: 60, // Height increased for larger wave
              amplitude: 40, // Amplitude for wave height
              speed: 0.15,
              points: 4,
            }}
            className="absolute bottom-0 w-full h-full"
          />
          <Wave
            fill="rgba(255, 179, 102, 0.6)"
            paused={false}
            options={{
              height: 80, // Higher wave to ensure it fills half the screen
              amplitude: 60,
              speed: 0.12,
              points: 4,
            }}
            className="absolute bottom-0 w-full h-full"
          />
          <Wave
            fill="rgba(255, 153, 51, 0.4)"
            paused={false}
            options={{
              height: 100, // Tallest wave for full coverage
              amplitude: 80,
              speed: 0.18,
              points: 5,
            }}
            className="absolute bottom-0 w-full h-full"
          />
        </div>
      )}

      {/* Icon or Button */}
      <div className="relative z-10 mt-8 bg-white w-16 h-16 rounded-full flex justify-center items-center text-2xl text-orange-400">
      <AiOutlineDelete />
      </div>
    </div>
  );
};

export default BabbleWave;
