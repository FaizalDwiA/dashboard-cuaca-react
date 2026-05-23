import React from "react";
import { Sun, Cloud, CloudRain, Moon } from "lucide-react";

interface WeatherArtProps {
  atmosphere: "cerah" | "berawan_hujan" | "malam";
}

export const WeatherArt: React.FC<WeatherArtProps> = ({ atmosphere }) => {
  switch (atmosphere) {
    case "cerah":
      return (
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          {/* Glowing rays */}
          <div className="absolute w-28 h-28 bg-yellow-300/30 rounded-full blur-2xl animate-pulse" />
          <Sun className="w-24 h-24 text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.6)] animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-2 right-1 font-mono text-[10px] bg-sky-300/20 text-sky-100 px-1.5 py-0.5 rounded backdrop-blur whitespace-nowrap">
            ☀️ UV TINGGI
          </div>
        </div>
      );
    case "berawan_hujan":
      return (
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-slate-300/20 rounded-full blur-2xl animate-pulse" />
          <Cloud className="w-24 h-24 text-slate-100 drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]" />
          <CloudRain className="absolute bottom-4 right-4 w-12 h-12 text-blue-300 animate-bounce" />
          <div className="absolute -bottom-1 text-[11px] text-slate-300 font-mono tracking-widest animate-pulse whitespace-nowrap">
            💧 💧 💧
          </div>
        </div>
      );
    case "malam":
      return (
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
          <Moon className="w-24 h-24 text-indigo-100 drop-shadow-[0_0_25px_rgba(199,210,254,0.4)] animate-[pulse_3s_ease-in-out_infinite]" />
          <div className="absolute top-4 right-2 flex space-x-1">
            <span className="w-1 h-1 bg-white rounded-full animate-ping" />
            <span className="w-0.5 h-0.5 bg-white rounded-full opacity-50" />
          </div>
        </div>
      );
    default:
      return null;
  }
};
