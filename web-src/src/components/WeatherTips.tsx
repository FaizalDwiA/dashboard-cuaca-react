import React from "react";
import { Sun, CloudRain, Moon } from "lucide-react";

interface WeatherTipsProps {
  atmosphere: "cerah" | "berawan_hujan" | "malam";
}

export const WeatherTips: React.FC<WeatherTipsProps> = ({ atmosphere }) => {
  const getTips = (atm: "cerah" | "berawan_hujan" | "malam") => {
    switch (atm) {
      case "cerah":
        return {
          title: "Saran Aktivitas Luar",
          glow: "border-amber-400/30 bg-amber-400/5",
          icon: <Sun className="w-5 h-5 text-amber-300 animate-spin-slow" />,
          tips: [
            "Indeks UV tinggi. Gunakan sunscreen SPF 30+ sebelum keluar ruangan.",
            "Tubuh mudah dehidrasi di udara panas. Minum minimal 2.5L air hari ini.",
            "Waktu optimal untuk menjemur pakaian, mencuci kendaraan, atau aktivitas luar ruangan lainnya."
          ]
        };
      case "berawan_hujan":
        return {
          title: "Saran Siaga Cuaca",
          glow: "border-sky-400/30 bg-sky-400/5",
          icon: <CloudRain className="w-5 h-5 text-sky-300 animate-bounce" />,
          tips: [
            "Selalu bawa payung atau jas hujan di kendaraan Anda.",
            "Jaga jarak berkendara karena jalanan licin dan jarak pandang terbatas.",
            "Waktu yang pas untuk menikmati makanan hangat seperti bakso atau mie kuah di rumah."
          ]
        };
      case "malam":
        return {
          title: "Saran Istirahat Sehat",
          glow: "border-purple-400/30 bg-purple-400/5",
          icon: <Moon className="w-5 h-5 text-purple-300" />,
          tips: [
            "Udara malam dingin. Kenakan jaket jika berkendara atau beraktivitas di luar.",
            "Kurangi paparan gadget sebelum tidur agar istirahat Anda berkualitas.",
            "Bagus untuk mengudarakan ventilasi rumah sejenak sebelum malam larut."
          ]
        };
      default:
        return {
          title: "Saran Harian",
          glow: "border-white/10 bg-white/5",
          icon: null,
          tips: ["Pantau cuaca sebelum bepergian."]
        };
    }
  };

  const currentTips = getTips(atmosphere);

  return (
    <div id="weather-recommendation" className={`border p-4 rounded-3xl transition-all duration-500 ease-in-out ${currentTips.glow}`}>
      <div className="flex items-center gap-2 mb-2">
        {currentTips.icon}
        <span className="text-xs font-bold uppercase tracking-wider text-white">
          Rekomendasi Aktivitas - {currentTips.title}
        </span>
      </div>
      <ul className="list-disc list-inside text-xs text-white/85 space-y-1.5 pl-1.5 leading-relaxed">
        {currentTips.tips.map((tip, idx) => (
          <li key={idx} className="marker:text-emerald-300">{tip}</li>
        ))}
      </ul>
    </div>
  );
};
