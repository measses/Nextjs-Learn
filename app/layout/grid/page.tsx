// app/layout/grid/page.tsx
import { BackButton } from "@/app/ui/back-button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function GridExample() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <BackButton />
      <h1 className={`${pacifico.className} text-3xl text-center mb-8`}>
        Grid Temel Özellikleri
      </h1>
      {/* INFO: Bu sayfada Pacifico fontu kullanıldı. Bu font, Google Fonts'tan alındı ve bu sayfada kullanıldı. */}

      <div className="space-y-8">
        {/* Grid Template Columns: 3 Sütun */}
        <div>
          <h2 className="text-2xl mb-4">Grid Template Columns - 3 Sütun</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              Grid Item 1
            </div>
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
              Grid Item 2
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
              Grid Item 3
            </div>
          </div>
        </div>

        {/* Grid Column Start/End */}
        <div>
          <h2 className="text-2xl mb-4">Grid Column Start/End</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 bg-purple-500 text-white p-6 rounded-lg shadow-lg">
              Grid Item 1 (Col Span 2)
            </div>
            <div className="col-span-2 bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
              Grid Item 2 (Col Span 2)
            </div>
            <div className="col-span-4 bg-gray-500 text-white p-6 rounded-lg shadow-lg">
              Grid Item 3 (Col Span 4)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
