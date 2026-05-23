import { CityWeather } from "./types";

export const initialCities: CityWeather[] = [
  {
    id: "sukoharjo",
    name: "Sukoharjo",
    province: "Jawa Tengah",
    temp: 32,
    tempMin: 25,
    tempMax: 34,
    condition: "Cerah Terang Benderang",
    atmosphere: "cerah",
    humidity: 62,
    windSpeed: 12,
    aqi: 58,
    aqiStatus: "Bagus",
    hourly: [
      { time: "08:00", temp: 27, icon: "sun", condition: "Cerah" },
      { time: "11:00", temp: 31, icon: "sun", condition: "Sangat Terang" },
      { time: "14:00", temp: 34, icon: "sun", condition: "Cukup Terik" },
      { time: "17:00", temp: 30, icon: "cloud", condition: "Cerah Berawan" },
      { time: "20:00", temp: 27, icon: "moon", condition: "Malam Cerah" },
      { time: "23:00", temp: 25, icon: "moon", condition: "Malam Tenang" }
    ],
    forecast: [
      { day: "Besok", tempMin: 25, tempMax: 33, icon: "sun", condition: "Cerah Berawan" },
      { day: "Lusa", tempMin: 24, tempMax: 32, icon: "rain", condition: "Hujan Ringan" },
      { day: "Senin", tempMin: 25, tempMax: 33, icon: "cloud", condition: "Berawan Tebal" }
    ]
  },
  {
    id: "surakarta",
    name: "Surakarta",
    province: "Jawa Tengah",
    temp: 33,
    tempMin: 26,
    tempMax: 35,
    condition: "Cerah Berawan",
    atmosphere: "cerah",
    humidity: 59,
    windSpeed: 15,
    aqi: 65,
    aqiStatus: "Bagus",
    hourly: [
      { time: "08:00", temp: 28, icon: "sun", condition: "Hangat" },
      { time: "11:00", temp: 32, icon: "sun", condition: "Cerah" },
      { time: "14:00", temp: 35, icon: "sun", condition: "Terik Menyengat" },
      { time: "17:00", temp: 31, icon: "cloud", condition: "Sore Berawan" },
      { time: "20:00", temp: 28, icon: "moon", condition: "Malam Indah" },
      { time: "23:00", temp: 26, icon: "moon", condition: "Malam Berbintang" }
    ],
    forecast: [
      { day: "Besok", tempMin: 25, tempMax: 34, icon: "sun", condition: "Cerah Berawan" },
      { day: "Lusa", tempMin: 24, tempMax: 32, icon: "rain", condition: "Hujan Sore Hari" },
      { day: "Senin", tempMin: 25, tempMax: 33, icon: "cloud", condition: "Hembusan Angin Segar" }
    ]
  },
  {
    id: "klaten",
    name: "Klaten",
    province: "Jawa Tengah",
    temp: 29,
    tempMin: 23,
    tempMax: 32,
    condition: "Berawan Selimut Tipis",
    atmosphere: "berawan_hujan",
    humidity: 75,
    windSpeed: 9,
    aqi: 45,
    aqiStatus: "Sangat Baik",
    hourly: [
      { time: "08:00", temp: 25, icon: "cloud", condition: "Berawan Sejuk" },
      { time: "11:00", temp: 29, icon: "cloud", condition: "Mendung Tipis" },
      { time: "14:00", temp: 32, icon: "cloud", condition: "Berawan" },
      { time: "17:00", temp: 28, icon: "rain", condition: "Gerimis Singkat" },
      { time: "20:00", temp: 25, icon: "cloud", condition: "Lembap Hangat" },
      { time: "23:00", temp: 24, icon: "moon", condition: "Malam Tenang" }
    ],
    forecast: [
      { day: "Besok", tempMin: 23, tempMax: 31, icon: "rain", condition: "Hujan Sedang" },
      { day: "Lusa", tempMin: 22, tempMax: 30, icon: "cloud", condition: "Mendung Syahdu" },
      { day: "Senin", tempMin: 23, tempMax: 32, icon: "sun", condition: "Kembali Cerah" }
    ]
  },
  {
    id: "pati",
    name: "Pati",
    province: "Jawa Tengah",
    temp: 34,
    tempMin: 26,
    tempMax: 36,
    condition: "Panas Tropis Menyengat",
    atmosphere: "cerah",
    humidity: 52,
    windSpeed: 18,
    aqi: 72,
    aqiStatus: "Bagus",
    hourly: [
      { time: "08:00", temp: 29, icon: "sun", condition: "Cerah" },
      { time: "11:00", temp: 33, icon: "sun", condition: "Panas" },
      { time: "14:00", temp: 36, icon: "sun", condition: "Sangat Terik" },
      { time: "17:00", temp: 32, icon: "cloud", condition: "Sore Panas" },
      { time: "20:00", temp: 29, icon: "moon", condition: "Malam Hangat" },
      { time: "23:00", temp: 27, icon: "moon", condition: "Malam Hening" }
    ],
    forecast: [
      { day: "Besok", tempMin: 26, tempMax: 35, icon: "sun", condition: "Cerah Tropis" },
      { day: "Lusa", tempMin: 25, tempMax: 33, icon: "cloud", condition: "Berawan Sore" },
      { day: "Senin", tempMin: 26, tempMax: 34, icon: "sun", condition: "Sangat Cerah" }
    ]
  },
  {
    id: "boyolali",
    name: "Boyolali",
    province: "Jawa Tengah",
    temp: 23,
    tempMin: 19,
    tempMax: 26,
    condition: "Mendung Berkabut Dingin",
    atmosphere: "berawan_hujan",
    humidity: 86,
    windSpeed: 10,
    aqi: 24,
    aqiStatus: "Sangat Baik",
    hourly: [
      { time: "08:00", temp: 20, icon: "cloud", condition: "Segar Dingin" },
      { time: "11:00", temp: 23, icon: "cloud", condition: "Mendung Tebal" },
      { time: "14:00", temp: 25, icon: "rain", condition: "Hujan Ringan" },
      { time: "17:00", temp: 22, icon: "rain", condition: "Gerimis Pegunungan" },
      { time: "20:00", temp: 20, icon: "cloud", condition: "Kabut Tipis" },
      { time: "23:00", temp: 19, icon: "moon", condition: "Dingin Nyaman" }
    ],
    forecast: [
      { day: "Besok", tempMin: 18, tempMax: 24, icon: "rain", condition: "Hujan Petir" },
      { day: "Lusa", tempMin: 19, tempMax: 25, icon: "cloud", condition: "Sejuk Berawan" },
      { day: "Senin", tempMin: 18, tempMax: 26, icon: "sun", condition: "Cerah Sejuk" }
    ]
  },
  {
    id: "karanganyar",
    name: "Karanganyar",
    province: "Jawa Tengah",
    temp: 18,
    tempMin: 15,
    tempMax: 23,
    condition: "Malam Sejuk Berangin",
    atmosphere: "malam",
    humidity: 88,
    windSpeed: 11,
    aqi: 18,
    aqiStatus: "Sangat Baik",
    hourly: [
      { time: "08:00", temp: 17, icon: "sun", condition: "Pagi Dingin" },
      { time: "11:00", temp: 21, icon: "sun", condition: "Sejuk Cerah" },
      { time: "14:00", temp: 23, icon: "cloud", condition: "Berawan Selo" },
      { time: "17:00", temp: 19, icon: "cloud", condition: "Mendung Senja" },
      { time: "20:00", temp: 18, icon: "moon", condition: "Sangat Sejuk" },
      { time: "23:00", temp: 15, icon: "moon", condition: "Dingin Tawangmangu" }
    ],
    forecast: [
      { day: "Besok", tempMin: 16, tempMax: 22, icon: "sun", condition: "Cerah Sejuk" },
      { day: "Lusa", tempMin: 15, tempMax: 21, icon: "rain", condition: "Hujan Kabut" },
      { day: "Senin", tempMin: 16, tempMax: 23, icon: "cloud", condition: "Berawan Dingin" }
    ]
  },
  {
    id: "sragen",
    name: "Sragen",
    province: "Jawa Tengah",
    temp: 31,
    tempMin: 25,
    tempMax: 33,
    condition: "Dominan Cerah",
    atmosphere: "cerah",
    humidity: 65,
    windSpeed: 13,
    aqi: 52,
    aqiStatus: "Bagus",
    hourly: [
      { time: "08:00", temp: 27, icon: "sun", condition: "Cerah Hangat" },
      { time: "11:00", temp: 30, icon: "sun", condition: "Cerah" },
      { time: "14:00", temp: 33, icon: "sun", condition: "Suhu Puncak" },
      { time: "17:00", temp: 29, icon: "cloud", condition: "Berawan Sore" },
      { time: "20:00", temp: 27, icon: "moon", condition: "Malam Tenang" },
      { time: "23:00", temp: 25, icon: "moon", condition: "Malam Sejuk" }
    ],
    forecast: [
      { day: "Besok", tempMin: 24, tempMax: 32, icon: "sun", condition: "Cerah Berawan" },
      { day: "Lusa", tempMin: 24, tempMax: 31, icon: "cloud", condition: "Sedikit Mendung" },
      { day: "Senin", tempMin: 25, tempMax: 33, icon: "sun", condition: "Dominan Terang" }
    ]
  }
];
