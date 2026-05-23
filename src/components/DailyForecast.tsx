import React from "react";
import { Calendar, Sun, Cloud, CloudRain, Moon } from "lucide-react";
import { DayForecast } from "../types";

interface DailyForecastProps {
  forecastData: DayForecast[];
}

export const DailyForecast: React.FC<DailyForecastProps> = ({ forecastData }) => {
  const getForecastIconComponent = (icon: "sun" | "cloud" | "rain" | "moon") => {
    switch (icon) {
      case "sun":
        return <Sun className="w-6 h-6 text-yellow-300" />;
      case "cloud":
        return <Cloud className="w-6 h-6 text-slate-200" />;
      case "rain":
        return <CloudRain className="w-6 h-6 text-blue-300" />;
      case "moon":
        return <Moon className="w-6 h-6 text-purple-200" />;
    }
  };

  return (
    <div className="glass-panel p-5 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3.5">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-white/80" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">Ramalan Cuaca 3 Hari</h3>
        </div>
        <span className="text-[10px] text-white/60 font-mono">Suhu Min / Max</span>
      </div>

      <div className="flex flex-col gap-2">
        {forecastData.map((fc, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
          >
            <span className="text-xs font-semibold text-white/90 w-24 text-left">{fc.day}</span>
            
            <div className="flex items-center gap-2">
              {getForecastIconComponent(fc.icon)}
              <span className="text-xs text-white/80 w-24 truncate">{fc.condition}</span>
            </div>

            <div className="font-mono text-xs font-bold text-white">
              <span className="text-sky-300">{fc.tempMin}°</span>
              <span className="mx-1 text-white/30">/</span>
              <span className="text-amber-300">{fc.tempMax}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
