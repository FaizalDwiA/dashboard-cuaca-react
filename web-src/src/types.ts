export interface HourForecast {
  time: string;
  temp: number;
  icon: "sun" | "cloud" | "rain" | "moon";
  condition: string;
}

export interface DayForecast {
  day: string;
  tempMin: number;
  tempMax: number;
  icon: "sun" | "cloud" | "rain" | "moon";
  condition: string;
}

export interface CityWeather {
  id: string;
  name: string;
  province: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  atmosphere: "cerah" | "berawan_hujan" | "malam";
  humidity: number;
  windSpeed: number;
  aqi: number;
  aqiStatus: "Sangat Baik" | "Bagus" | "Sedang" | "Tidak Sehat";
  hourly: HourForecast[];
  forecast: DayForecast[];
}

export interface ThemeClasses {
  bg: string;
  glass: string;
  glassActive: string;
  accentText: string;
  cardBorder: string;
  interactiveBtn: string;
}
