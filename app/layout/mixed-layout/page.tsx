import { BackButton } from "@/app/ui/back-button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function MixedLayoutExample() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <BackButton />
      <h1
        className={`${pacifico.className} text-3xl text-center mb-8 dark:text-white`}
      >
        Flexbox ve Grid Kombinasyonu
      </h1>
      // INFO: Bu sayfada Pacifico fontu kullanıldı. Bu font, Google Fonts'tan
      alındı ve bu sayfada kullanıldı.
      {/* Flex container: İki öğeyi yatay olarak hizalar */}
      <div className="flex space-x-4 mb-8">
        <div className="flex-1 bg-blue-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700 dark:bg-blue-600">
          Flex Item 1
        </div>
        <div className="flex-1 bg-red-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700 dark:bg-red-600">
          Flex Item 2
        </div>
      </div>
      {/* Grid container: 2x2 ızgara düzeni oluşturur */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700 dark:bg-green-600">
          Grid Item 1
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700 dark:bg-purple-600">
          Grid Item 2
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700 dark:bg-yellow-600">
          Grid Item 3
        </div>
        <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700 dark:bg-pink-600">
          Grid Item 4
        </div>
      </div>
    </div>
  );
}
