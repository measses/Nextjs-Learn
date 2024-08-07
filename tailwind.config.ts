// tailwind.config.ts - Tailwind CSS konfigürasyon dosyası

import type { Config } from "tailwindcss";

// Tailwind CSS konfigürasyonu için ayarlar
const config: Config = {
  // Tailwind CSS'in hangi dosyalarda kullanılacağını belirten içerik yolları
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Sayfa bileşenlerini içeren dosyalar
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Diğer bileşen dosyaları
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Uygulama genelindeki dosyalar
  ],
  theme: {
    // Tema ayarlarını genişletme
    extend: {
      // Konteyner bileşenlerine varsayılan padding ekleme
      container: {
        padding: "2rem",
      },
      // Özel renk tanımlamaları
      colors: {
        mysage: "#CCD5AE", // Adaçayı yeşili
        mybeige: "#E0E5B6", // Bej
        mypastel: "#FAEDCE", // Pastel sarı
        mylight: "#FEFAE0", // Açık sarı
      },
      // Arka plan resimleri için özel tanımlamalar
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Radial gradyan
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Konik gradyan
      },
    },
  },
  // Eklenmiş Tailwind CSS eklentileri (bu projede yok)
  plugins: [],
};

// Tailwind CSS konfigürasyonunu varsayılan olarak dışa aktarma
export default config;
