// app/layout/flex-and-grid-features/page.tsx
import { BackButton } from "@/app/ui/back-button";
import { Pacifico } from "next/font/google";


const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function FlexAndGridFeatures() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <BackButton />
      <h1 className={`${pacifico.className} text-3xl text-center mb-8`}>
        Flexbox ve Grid Özellikleri
      </h1>
      {/* INFO: Bu sayfada Pacifico fontu kullanıldı. Bu font, Google Fonts'tan alındı ve bu sayfada kullanıldı. */}

      {/* Flexbox Özellikleri */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Flexbox Özellikleri</h2>
        <div className="flex flex-wrap space-x-4 space-y-4">
          {/* Flex Direction */}
          <div className="flex flex-col justify-center items-center w-48 h-48 bg-blue-200 p-4">
            <p className="font-bold">Flex Direction</p>
            <div className="flex flex-row w-full h-20 bg-blue-500 text-white justify-center items-center">
              <div>Row</div>
            </div>
          </div>

          {/* Flex Wrap */}
          <div className="flex flex-wrap justify-center items-center w-48 h-48 bg-green-200 p-4">
            <p className="font-bold">Flex Wrap</p>
            <div className="flex w-40 bg-green-500 text-white">
              <div className="w-20">Item 1</div>
              <div className="w-20">Item 2</div>
              <div className="w-20">Item 3</div>
            </div>
          </div>

          {/* Flex Grow / Flex Shrink */}
          <div className="flex justify-center items-center w-48 h-48 bg-purple-200 p-4">
            <p className="font-bold">Flex Grow/Shrink</p>
            <div className="flex w-full h-20 bg-purple-500 text-white">
              <div className="flex-grow flex-shrink-0 w-16 bg-purple-700">
                Grow
              </div>
              <div className="w-16 bg-purple-600">No Grow</div>
            </div>
          </div>

          {/* Order */}
          <div className="flex justify-center items-center w-48 h-48 bg-yellow-200 p-4">
            <p className="font-bold">Order</p>
            <div className="flex w-full h-20 bg-yellow-500 text-white">
              <div className="order-2 bg-yellow-700">Order 2</div>
              <div className="order-1 bg-yellow-600">Order 1</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Özellikleri */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Grid Özellikleri</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Grid Template Columns */}
          <div className="bg-blue-200 p-4">
            <p className="font-bold">Grid Template Columns</p>
            <div className="grid grid-cols-3 gap-2 bg-blue-500 text-white p-2">
              <div className="bg-blue-600">Col 1</div>
              <div className="bg-blue-700">Col 2</div>
              <div className="bg-blue-800">Col 3</div>
            </div>
          </div>

          {/* Grid Column Start/End */}
          <div className="bg-green-200 p-4">
            <p className="font-bold">Grid Column Start/End</p>
            <div className="grid grid-cols-4 gap-2 bg-green-500 text-white p-2">
              <div className="col-span-2 bg-green-600">Start 1 / End 3</div>
              <div className="col-span-2 bg-green-700">Start 3 / End 5</div>
            </div>
          </div>

          {/* Grid Template Rows */}
          <div className="bg-purple-200 p-4">
            <p className="font-bold">Grid Template Rows</p>
            <div className="grid grid-rows-3 gap-2 bg-purple-500 text-white p-2 h-32">
              <div className="bg-purple-600">Row 1</div>
              <div className="bg-purple-700">Row 2</div>
              <div className="bg-purple-800">Row 3</div>
            </div>
          </div>

          {/* Grid Row Start/End */}
          <div className="bg-yellow-200 p-4">
            <p className="font-bold">Grid Row Start/End</p>
            <div className="grid grid-rows-4 gap-2 bg-yellow-500 text-white p-2 h-32">
              <div className="row-span-2 bg-yellow-600">Start 1 / End 3</div>
              <div className="row-span-2 bg-yellow-700">Start 3 / End 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
