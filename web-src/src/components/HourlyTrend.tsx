import React from "react";
import { Clock, Sun, Cloud, CloudRain, Moon } from "lucide-react";
import { HourForecast } from "../types";

interface HourlyTrendProps {
  hourlyData: HourForecast[];
}

export const HourlyTrend: React.FC<HourlyTrendProps> = ({ hourlyData }) => {
  const getIcon = (icon: "sun" | "cloud" | "rain" | "moon") => {
    switch (icon) {
      case "sun":
        return <Sun className="w-4 h-4 text-yellow-300" />;
      case "cloud":
        return <Cloud className="w-4 h-4 text-slate-300" />;
      case "rain":
        return <CloudRain className="w-4 h-4 text-blue-300" />;
      case "moon":
        return <Moon className="w-4 h-4 text-indigo-200" />;
    }
  };

  return (
    <div className="glass-panel p-5 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3.5">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-white/80 animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">Tren Suhu Hari Ini</h3>
        </div>
        <span className="text-[10px] text-white/60 font-mono">Format 24 Jam</span>
      </div>
      
      <div className="grid grid-cols-6 gap-2">
        {hourlyData.map((hour, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
          >
            <span className="text-[10px] text-white/70 font-mono">{hour.time}</span>
            <div className="my-2.5">
              {getIcon(hour.icon)}
            </div>
            <span className="text-xs font-bold text-white font-mono">{hour.temp}°</span>
            <span className="text-[8px] text-white/60 mt-1 font-sans text-center truncate w-full px-0.5" title={hour.condition}>
              {hour.condition}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
