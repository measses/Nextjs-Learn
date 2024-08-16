// app/layout/flexbox/page.tsx
import { BackButton } from "@/app/ui/back-button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function FlexboxExample() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <BackButton />
      <h1
        className={`${pacifico.className} text-3xl text-center mb-8 dark:text-white`}
      >
        Flexbox Temel Özellikleri
      </h1>
      {/* INFO: Bu sayfada Pacifico fontu kullanıldı. Bu font, Google Fonts'tan alındı ve bu sayfada kullanıldı. */}

      <div className="space-y-8">
        {/* Flex Direction: Row (varsayılan) */}
        <div>
          <h2 className="text-2xl mb-4 dark:text-gray-200">
            Flex Direction - Row
          </h2>
          <div className="flex space-x-4">
            <div className="flex-1 bg-blue-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 1
            </div>
            <div className="flex-1 bg-red-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 2
            </div>
            <div className="flex-1 bg-green-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 3
            </div>
          </div>
        </div>

        {/* Flex Direction: Column */}
        <div>
          <h2 className="text-2xl mb-4 dark:text-gray-200">
            Flex Direction - Column
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 1
            </div>
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 2
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 3
            </div>
          </div>
        </div>

        {/* Flex Wrap: No Wrap (varsayılan) */}
        <div>
          <h2 className="text-2xl mb-4 dark:text-gray-200">
            Flex Wrap - No Wrap
          </h2>
          <div className="flex space-x-4">
            <div className="w-64 bg-blue-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 1
            </div>
            <div className="w-64 bg-red-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 2
            </div>
            <div className="w-64 bg-green-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 3
            </div>
          </div>
        </div>

        {/* Flex Wrap: Wrap */}
        <div>
          <h2 className="text-2xl mb-4 dark:text-gray-200">Flex Wrap - Wrap</h2>
          <div className="flex flex-wrap space-x-4">
            <div className="w-64 bg-blue-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 1
            </div>
            <div className="w-64 bg-red-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 2
            </div>
            <div className="w-64 bg-green-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 3
            </div>
            <div className="w-64 bg-yellow-500 text-white p-6 rounded-lg shadow-lg dark:shadow-gray-700">
              Flex Item 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
