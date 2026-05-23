import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, X, Check } from "lucide-react";
import { CityWeather } from "../types";

interface AddCityModalProps {
  showAddModal: boolean;
  onClose: () => void;
  onAdd: (newCity: CityWeather) => void;
  defaultName: string;
}

export const AddCityModal: React.FC<AddCityModalProps> = ({ 
  showAddModal, 
  onClose, 
  onAdd,
  defaultName
}) => {
  const [newCityName, setNewCityName] = useState<string>(defaultName);
  const [newCityProvince, setNewCityProvince] = useState<string>("");
  const [newCityAtmosphere, setNewCityAtmosphere] = useState<"cerah" | "berawan_hujan" | "malam">("cerah");
  const [newCityTemp, setNewCityTemp] = useState<number>(30);
  const [newCityCondition, setNewCityCondition] = useState<string>("Cerah");

  // Dynamically update condition input when user updates atmosphere
  const handleAtmosphereChange = (val: "cerah" | "berawan_hujan" | "malam") => {
    setNewCityAtmosphere(val);
    if (val === "cerah") setNewCityCondition("Cerah Tropis");
    else if (val === "berawan_hujan") setNewCityCondition("Hujan Ringan");
    else setNewCityCondition("Malam Sunyi");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCityName.trim()) return;

    const formattedId = newCityName.trim().toLowerCase().replace(/\s+/g, '-');
    
    const newCity: CityWeather = {
      id: formattedId,
      name: newCityName,
      province: newCityProvince.trim() || "Wilayah Kustom",
      temp: Number(newCityTemp),
      tempMin: Math.max(12, Number(newCityTemp) - 5),
      tempMax: Math.min(42, Number(newCityTemp) + 4),
      condition: newCityCondition || (newCityAtmosphere === "cerah" ? "Cerah Berawan" : newCityAtmosphere === "malam" ? "Malam Syahdu" : "Hujan Rintik"),
      atmosphere: newCityAtmosphere,
      humidity: newCityAtmosphere === "berawan_hujan" ? 85 : newCityAtmosphere === "malam" ? 75 : 55,
      windSpeed: 12,
      aqi: newCityAtmosphere === "cerah" ? 84 : 32,
      aqiStatus: newCityAtmosphere === "cerah" ? "Bagus" : "Sangat Baik",
      hourly: [
        { time: "08:00", temp: Math.max(15, Number(newCityTemp) - 4), icon: newCityAtmosphere === "malam" ? "moon" : "sun", condition: "Pagi Segar" },
        { time: "11:00", temp: Number(newCityTemp), icon: "sun", condition: "Siang Hangat" },
        { time: "14:00", temp: Math.min(42, Number(newCityTemp) + 3), icon: "sun", condition: "Suhu Puncak" },
        { time: "17:00", temp: Math.max(15, Number(newCityTemp) - 1), icon: "cloud", condition: "Sore Santai" },
        { time: "20:00", temp: Math.max(12, Number(newCityTemp) - 3), icon: "moon", condition: "Malam Indah" },
        { time: "23:00", temp: Math.max(10, Number(newCityTemp) - 5), icon: "moon", condition: "Malam Rehat" }
      ],
      forecast: [
        { day: "Besok", tempMin: Math.max(12, Number(newCityTemp) - 6), tempMax: Math.min(42, Number(newCityTemp) + 2), icon: newCityAtmosphere === "cerah" ? "sun" : "rain", condition: "Berawan Stabil" },
        { day: "Lusa", tempMin: Math.max(12, Number(newCityTemp) - 4), tempMax: Math.min(42, Number(newCityTemp) + 1), icon: "cloud", condition: "Sedikit Mendung" },
        { day: "Senin", tempMin: Math.max(11, Number(newCityTemp) - 5), tempMax: Math.min(42, Number(newCityTemp) + 3), icon: "sun", condition: "Dominan Cerah" }
      ]
    };

    onAdd(newCity);
    setNewCityName("");
    setNewCityProvince("");
  };

  if (!showAddModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blur backdrop overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
      />

      {/* Modal window */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-slate-900 border border-white/15 p-6 rounded-[28px] max-w-md w-full z-15 shadow-2xl text-slate-100 flex flex-col gap-4 relative"
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
            <Plus className="w-5 h-5 text-emerald-400" /> Tambah Wilayah Kustom
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* City Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">Nama Kota / Wilayah *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Makassar, Jayapura, Medan..."
              value={newCityName}
              onChange={(e) => setNewCityName(e.target.value)}
              className="w-full bg-slate-800 border border-white/12 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Province */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">Provinsi / Keterangan Wilayah</label>
            <input
              type="text"
              placeholder="Contoh: Sulawesi Selatan, Papua..."
              value={newCityProvince}
              onChange={(e) => setNewCityProvince(e.target.value)}
              className="w-full bg-slate-800 border border-white/12 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Temperature & Atmosphere side-by-side */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Temperature */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-300">Suhu Saat Ini (°C)</label>
              <input
                type="number"
                min="10"
                max="45"
                value={newCityTemp}
                onChange={(e) => setNewCityTemp(Number(e.target.value))}
                className="w-full bg-slate-800 border border-white/12 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono"
              />
            </div>

            {/* Atmosphere Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-300">Atmosfer Cuaca</label>
              <select
                value={newCityAtmosphere}
                onChange={(e) => handleAtmosphereChange(e.target.value as "cerah" | "berawan_hujan" | "malam")}
                className="w-full bg-slate-800 border border-white/12 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option value="cerah">☀️ Cerah (Siang)</option>
                <option value="berawan_hujan">🌧️ Berawan / Hujan</option>
                <option value="malam">🌙 Malam Hari</option>
              </select>
            </div>

          </div>

          {/* Condition Label Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">Keterangan Cuaca Spesifik</label>
            <input
              type="text"
              placeholder="Contoh: Hujan Gerimis, Berawan Tebal, Cerah Menyengat"
              value={newCityCondition}
              onChange={(e) => setNewCityCondition(e.target.value)}
              className="w-full bg-slate-800 border border-white/12 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 mt-4 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs hover:bg-white/5 border border-transparent text-slate-400 hover:text-white transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 border border-white/10 px-5 py-2 rounded-xl text-xs text-white font-bold tracking-wide transition-all shadow-md shadow-emerald-500/10 flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" /> Simpan Wilayah
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};
