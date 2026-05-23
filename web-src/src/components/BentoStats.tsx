import React from "react";
import { Droplets, Wind, Compass, Thermometer } from "lucide-react";
import { CityWeather } from "../types";

interface BentoStatsProps {
  currentCity: CityWeather;
}

export const BentoStats: React.FC<BentoStatsProps> = ({ currentCity }) => {
  return (
    <div id="stats-bento" className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Humidity Card */}
      <div className="glass-panel p-4 rounded-3xl shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform">
        <div className="flex items-center justify-between text-white/65">
          <span className="text-xs font-semibold tracking-wide uppercase">Kelembapan</span>
          <Droplets className="w-5 h-5 text-sky-300" />
        </div>
        <div className="mt-4">
          <div className="text-2xl font-bold text-white font-mono">{currentCity.humidity}%</div>
          <p className="text-[10px] text-white/70 mt-1">Uap air di atmosfer</p>
        </div>
      </div>

      {/* Wind Speed Card */}
      <div className="glass-panel p-4 rounded-3xl shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform">
        <div className="flex items-center justify-between text-white/65">
          <span className="text-xs font-semibold tracking-wide uppercase">Angin</span>
          <Wind className="w-5 h-5 text-teal-300 animate-pulse" />
        </div>
        <div className="mt-4">
          <div className="text-2xl font-bold text-white font-mono">{currentCity.windSpeed} km/h</div>
          <p className="text-[10px] text-white/70 mt-1">Hembusan angin Barat Laut</p>
        </div>
      </div>

      {/* AQI (Air Quality) Card */}
      <div className="glass-panel p-4 rounded-3xl shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform">
        <div className="flex items-center justify-between text-white/65">
          <span className="text-xs font-semibold tracking-wide uppercase">Udara (AQI)</span>
          <Compass className="w-5 h-5 text-emerald-300" />
        </div>
        <div className="mt-4">
          <div className="text-2xl font-bold text-white font-mono">{currentCity.aqi}</div>
          <div className="inline-flex items-center gap-1 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-white font-medium">{currentCity.aqiStatus}</span>
          </div>
        </div>
      </div>

      {/* Custom Thermometer Sensor Card */}
      <div className="glass-panel p-4 rounded-3xl shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform">
        <div className="flex items-center justify-between text-white/65">
          <span className="text-xs font-semibold tracking-wide uppercase">Sensasi Suhu</span>
          <Thermometer className="w-5 h-5 text-amber-300" />
        </div>
        <div className="mt-4">
          <div className="text-2xl font-bold text-white font-mono">{currentCity.temp + 1}°C</div>
          <p className="text-[10px] text-white/70 mt-1">Suhu RealFeel terasa</p>
        </div>
      </div>
    </div>
  );
};
