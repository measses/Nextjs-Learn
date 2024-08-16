import { BackButton } from "../ui/back-button";

export default function ScreensExample() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Geri butonunu sayfanın başına ekleyin */}
      <BackButton />

      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Tailwind CSS Ekran Boyutları (Screens)
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Aşağıda, Tailwind CSS'in breakpoints (kırılma noktaları) kullanılarak
        farklı ekran boyutlarında nasıl değişiklikler yapabileceğinizi
        göreceksiniz.
      </p>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Small (sm) */}
        <div className="p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg dark:shadow-gray-700">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
            Small (sm)
          </h2>
          <p className="mt-2 text-blue-700 dark:text-blue-400">
            Min-width: 640px
          </p>
        </div>

        {/* Medium (md) */}
        <div className="p-6 bg-green-100 dark:bg-green-900 rounded-lg shadow-lg dark:shadow-gray-700">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-300">
            Medium (md)
          </h2>
          <p className="mt-2 text-green-700 dark:text-green-400">
            Min-width: 768px
          </p>
        </div>

        {/* Large (lg) */}
        <div className="p-6 bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow-lg dark:shadow-gray-700">
          <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300">
            Large (lg)
          </h2>
          <p className="mt-2 text-yellow-700 dark:text-yellow-400">
            Min-width: 1024px
          </p>
        </div>

        {/* Extra Large (xl) */}
        <div className="p-6 bg-red-100 dark:bg-red-900 rounded-lg shadow-lg dark:shadow-gray-700">
          <h2 className="text-xl font-semibold text-red-800 dark:text-red-300">
            Extra Large (xl)
          </h2>
          <p className="mt-2 text-red-700 dark:text-red-400">
            Min-width: 1280px
          </p>
        </div>

        {/* 2X Large (2xl) */}
        <div className="p-6 bg-purple-100 dark:bg-purple-900 rounded-lg shadow-lg dark:shadow-gray-700">
          <h2 className="text-xl font-semibold text-purple-800 dark:text-purple-300">
            2X Large (2xl)
          </h2>
          <p className="mt-2 text-purple-700 dark:text-purple-400">
            Min-width: 1536px
          </p>
        </div>

        {/* Responsive behavior explanation */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
            Responsive Davranış
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            Bu kutular, ekran boyutuna göre farklı düzenlerde hizalanır. Küçük
            ekranlarda her biri tam genişlikte görünürken, ekran genişledikçe
            daha fazla sütuna bölünür.
          </p>
        </div>
      </div>
    </div>
  );
}
