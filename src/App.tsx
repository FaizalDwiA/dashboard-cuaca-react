import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { 
  Cloud, 
  Search, 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  X, 
  Clock, 
  Sparkles, 
  ChevronRight,
  AlertCircle
} from "lucide-react";

import { CityWeather, ThemeClasses } from "./types";
import { initialCities } from "./data";
import { WeatherArt } from "./components/WeatherArt";
import { BentoStats } from "./components/BentoStats";
import { HourlyTrend } from "./components/HourlyTrend";
import { DailyForecast } from "./components/DailyForecast";
import { WeatherTips } from "./components/WeatherTips";
import { AddCityModal } from "./components/AddCityModal";

export default function App() {
  // Core Application States
  const [cities, setCities] = useState<CityWeather[]>(initialCities);
  const [selectedCityId, setSelectedCityId] = useState<string>("sukoharjo");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  
  // Custom City Modal State
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Filtered cities list based on search bar matching kota / provinsi
  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.province.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Active City
  const currentCity = cities.find(city => city.id === selectedCityId) || cities[0];

  // Set browser document title dynamically based on selection and real temp
  useEffect(() => {
    document.title = `Klimatika | Cuaca ${currentCity.name} - ${currentCity.temp}°C`;
  }, [currentCity]);

  // Real-time ticking Clock Ticker Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Date in Indonesian Style
  const formatIndonesianDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('id-ID', options);
  };

  // Select Theme classes according to current weather atmosphere
  const getAtmosphereClasses = (atmosphere: "cerah" | "berawan_hujan" | "malam"): ThemeClasses => {
    switch (atmosphere) {
      case "cerah":
        return {
          bg: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 text-white",
          glass: "bg-white/10 border-white/20 hover:bg-white/15",
          glassActive: "bg-white/25 border-white/40 shadow-lg text-white font-semibold",
          accentText: "text-sky-100",
          cardBorder: "border-sky-300/20",
          interactiveBtn: "bg-white/20 hover:bg-white/30 text-white"
        };
      case "berawan_hujan":
        return {
          bg: "bg-gradient-to-br from-slate-500 via-slate-600 to-zinc-800 text-white",
          glass: "bg-stone-900/20 border-stone-500/20 hover:bg-stone-900/30",
          glassActive: "bg-stone-900/40 border-stone-400/30 shadow-lg text-white font-semibold",
          accentText: "text-slate-300",
          cardBorder: "border-slate-500/20",
          interactiveBtn: "bg-slate-700/50 hover:bg-slate-700/70 text-white"
        };
      case "malam":
        return {
          bg: "bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-slate-100",
          glass: "bg-indigo-950/20 border-indigo-500/10 hover:bg-indigo-950/30",
          glassActive: "bg-indigo-950/40 border-indigo-500/30 shadow-lg text-purple-100 font-semibold",
          accentText: "text-purple-300",
          cardBorder: "border-purple-900/20",
          interactiveBtn: "bg-purple-900/30 hover:bg-purple-900/50 text-purple-200"
        };
    }
  };

  const theme = getAtmosphereClasses(currentCity.atmosphere);

  // Atmosphere simulation dynamic override controller
  const handleToggleAtmosphere = (newAtm: "cerah" | "berawan_hujan" | "malam") => {
    setCities(prev => prev.map(city => {
      if (city.id === selectedCityId) {
        let temp = city.temp;
        let cond = city.condition;
        if (newAtm === "cerah") {
          temp = Math.max(28, city.tempMax - 1);
          cond = "Simulasi Cerah Terang";
        } else if (newAtm === "berawan_hujan") {
          temp = Math.min(23, city.tempMin + 2);
          cond = "Simulasi Hujan Basah";
        } else {
          temp = Math.min(20, city.tempMin + 1);
          cond = "Simulasi Malam Sejuk";
        }
        return {
          ...city,
          atmosphere: newAtm,
          temp,
          condition: cond
        };
      }
      return city;
    }));
  };

  // Add custom city state integration handler
  const handleAddCity = (newCity: CityWeather) => {
    setCities(prev => [...prev, newCity]);
    setSelectedCityId(newCity.id);
    setShowAddModal(false);
  };

  return (
    <div id="weather-app" className={`min-h-screen bg-transition font-sans flex flex-col items-center p-4 md:p-8 ${theme.bg}`}>
      
      {/* Outer frame envelope */}
      <div className="w-full max-w-5xl flex flex-col gap-6">
        
        {/* Header - Klimatika Logo Mark and Simulated Clock */}
        <header id="header-bar" className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/12 rounded-2xl border border-white/20 shadow-md">
              <Cloud className="w-8 h-8 text-white drop-shadow-md animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] uppercase tracking-widest bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">
                  Skala Modular
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest bg-emerald-500/30 text-emerald-100 px-2 py-0.5 rounded-full">
                  Komponen Terpisah
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                Klimatika <span className="text-xs font-normal text-white/75 italic">Suhu Indonesia</span>
              </h1>
            </div>
          </div>

          <div id="clock-pane" className="flex flex-col md:items-end justify-center">
            <div className="flex items-center gap-2 bg-black/15 border border-white/5 py-1 px-3.5 rounded-xl font-mono text-sm shadow-inner text-white">
              <Clock className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>{currentTime.toLocaleTimeString('id-ID')} WIB</span>
            </div>
            <p className="text-xs text-white/70 mt-1 font-medium select-none">
              {formatIndonesianDate(currentTime)}
            </p>
          </div>
        </header>

        {/* Core Layout Grid */}
        <main id="app-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Side Selectors: 4 Cols */}
          <section id="sidebar-cities" className="lg:col-span-4 flex flex-col gap-4 w-full">
            
            {/* Search Input Box */}
            <div className="glass-panel p-4 rounded-3xl shadow-lg flex flex-col gap-3">
              <label htmlFor="search-input" className="text-xs font-semibold tracking-wide uppercase text-white/80 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" /> Cari Wilayah Baru
              </label>
              
              <div className="relative">
                <input
                  id="search-input"
                  name="search"
                  type="text"
                  placeholder="Sukoharjo, Sragen, Klaten..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-white placeholder-white/55 text-sm glass-input transition-all"
                />
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-white/50" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-3.5 top-3 w-5 h-5 flex items-center justify-center text-white/60 hover:text-white"
                    title="Bersihkan"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Quick Selection List */}
            <div className="glass-panel p-4 rounded-3xl shadow-lg flex flex-col gap-2.5 max-h-[340px] overflow-y-auto">
              <div className="flex items-center justify-between pb-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Daftar Wilayah ({filteredCities.length})
                </h3>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="p-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center gap-1 text-[11px] font-medium transition-all"
                  title="Tambah Wilayah"
                >
                  <Plus className="w-3.5 h-3.5" /> Tambah
                </button>
              </div>

              {filteredCities.length === 0 ? (
                <div className="text-center py-8 px-4 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl">
                  <AlertCircle className="w-8 h-8 text-white/40 mb-2 animate-bounce" />
                  <p className="text-sm font-medium text-white/80">Wilayah tidak ketemu</p>
                  <p className="text-xs text-white/50 mt-1">Buat baru secara manual!</p>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="mt-3 px-3.5 py-1.5 bg-white/20 hover:bg-white/30 border border-white/20 rounded-xl text-xs text-white font-medium transition-all flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Buat Kustom
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {filteredCities.map((city) => {
                    const isSelected = city.id === selectedCityId;
                    return (
                      <button
                        key={city.id}
                        id={`city-btn-${city.id}`}
                        onClick={() => setSelectedCityId(city.id)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                          isSelected ? theme.glassActive : theme.glass
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-light">
                            {city.atmosphere === "cerah" ? "☀️" : city.atmosphere === "berawan_hujan" ? "🌧️" : "🌙"}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm tracking-tight text-white">{city.name}</h4>
                            <p className="text-[11px] opacity-75">{city.province}</p>
                          </div>
                        </div>

                        <div className="text-right flex items-center gap-2">
                          <div className="font-mono text-base font-semibold text-white">
                            {city.temp}°C
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 opacity-60 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Atmosphere Control Switcher Simulator */}
            <div className="glass-panel p-4 rounded-3xl shadow-md border-l-4 border-l-amber-300">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/95">
                  Simulasi Cuaca (Interaktif)
                </h3>
              </div>
              <p className="text-[11px] text-white/75 mb-3 leading-relaxed">
                Ubah cuaca <span className="font-semibold">{currentCity.name}</span> secara instan untuk melihat perubahan warna latar belakang aplikasi:
              </p>
              
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => handleToggleAtmosphere("cerah")}
                  className={`py-2 px-1 rounded-xl text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    currentCity.atmosphere === "cerah"
                      ? "bg-amber-400 text-amber-950 font-bold shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <span className="text-lg">☀️</span>
                  <span>Cerah</span>
                </button>
                <button
                  onClick={() => handleToggleAtmosphere("berawan_hujan")}
                  className={`py-2 px-1 rounded-xl text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    currentCity.atmosphere === "berawan_hujan"
                      ? "bg-slate-300 text-slate-900 font-bold shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <span className="text-lg">🌧️</span>
                  <span>Mendung</span>
                </button>
                <button
                  onClick={() => handleToggleAtmosphere("malam")}
                  className={`py-2 px-1 rounded-xl text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    currentCity.atmosphere === "malam"
                      ? "bg-purple-600 text-purple-100 font-bold shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <span className="text-lg">🌙</span>
                  <span>Malam</span>
                </button>
              </div>
            </div>

          </section>

          {/* Centralized weather information presentation: 8 Cols */}
          <section id="weather-details" className="lg:col-span-8 flex flex-col gap-6 w-full">
            
            {/* Main weather highlight panel */}
            <div className="glass-panel p-6 md:p-8 rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
                <div className="flex items-center gap-1.5 text-white/80 bg-black/15 py-1 px-3 rounded-full text-xs font-medium backdrop-blur">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                  <span>{currentCity.name}, {currentCity.province}</span>
                </div>

                <div className="mt-4 flex items-baseline">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-md">
                    {currentCity.temp}
                  </span>
                  <span className="text-3xl font-light text-white/90 drop-shadow-md ml-1">
                    °C
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <h2 className="text-lg md:text-xl font-semibold tracking-wide text-white">
                    {currentCity.condition}
                  </h2>
                </div>

                <div className="mt-3 flex gap-4 text-xs font-mono text-white/80 border-t border-white/10 pt-3 w-full justify-center md:justify-start">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-red-300" /> Max: {currentCity.tempMax}°C
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-cyan-300" /> Min: {currentCity.tempMin}°C
                  </span>
                </div>
              </div>

              {/* Weather Art Illustration */}
              <div className="flex flex-col items-center justify-center z-10">
                <WeatherArt atmosphere={currentCity.atmosphere} />
              </div>
            </div>

            {/* Bento Cluster Statistics */}
            <BentoStats currentCity={currentCity} />

            {/* Smart contextual Tips banner */}
            <WeatherTips atmosphere={currentCity.atmosphere} />

            {/* Hourly trend and 3-day forecast components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HourlyTrend hourlyData={currentCity.hourly} />
              <DailyForecast forecastData={currentCity.forecast} />
            </div>

          </section>

        </main>

        {/* Add custom city pop-up dialog */}
        <AnimatePresence>
          {showAddModal && (
            <AddCityModal 
              showAddModal={showAddModal} 
              onClose={() => setShowAddModal(false)} 
              onAdd={handleAddCity}
              defaultName={searchQuery}
            />
          )}
        </AnimatePresence>

        {/* Footer info box */}
        <footer id="footer-credits" className="text-center py-6 mt-4 border-t border-white/10 flex flex-col items-center justify-center gap-1.5 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Klimatika Indonesia. Dipecah menjadi arsitektur React modular.</p>
          <div className="flex items-center gap-3 font-mono opacity-80 text-[10px]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Clean Architecture
            </span>
            <span className="text-white/20">|</span>
            <span>Solo area dataset</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
