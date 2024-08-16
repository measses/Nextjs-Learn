// app/page.tsx
import Link from "next/link";
import {
  FaFont,
  FaLayerGroup,
  FaPalette,
  FaBorderAll,
  FaThLarge,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Next.js Learning Journey
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Kart 1: Google Fonts Kullanımı */}
          <Link href="/typography/google-fonts">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaFont className="text-blue-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Google Fonts Kullanımı
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                Google Fonts ile Next.js uygulamanızda nasıl özel fontlar
                kullanabileceğinizi öğrenin.
              </p>
            </div>
          </Link>

          {/* Kart 2: Flexbox Örnekleri */}
          <Link href="/layout/flexbox">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaLayerGroup className="text-green-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Flexbox Örnekleri
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                Flexbox kullanarak esnek ve duyarlı düzenler oluşturmayı
                öğrenin.
              </p>
            </div>
          </Link>

          {/* Kart 3: Grid Örnekleri */}
          <Link href="/layout/grid">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-yellow-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaBorderAll className="text-yellow-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Grid Örnekleri
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                CSS Grid kullanarak gelişmiş ızgara düzenleri oluşturun.
              </p>
            </div>
          </Link>

          {/* Kart 4: Renk Özelleştirme */}
          <Link href="/styling/colors">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaPalette className="text-purple-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Renk Özelleştirme
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                Tailwind CSS ile özel renkleri nasıl ekleyip kullanabileceğinizi
                öğrenin.
              </p>
            </div>
          </Link>

          {/* Kart 5: Gradyanlar */}
          <Link href="/styling/gradients">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-pink-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaThLarge className="text-pink-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Gradyanlar
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                Gradyan arka planlar ve geçiş efektleri oluşturmayı öğrenin.
              </p>
            </div>
          </Link>

          {/* Kart 6: Mixed Layout */}
          <Link href="/layout/mixed-layout">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-teal-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaCogs className="text-teal-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Karma Düzen Örneği
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                Flexbox ve Grid'i bir arada kullanarak karma düzenler oluşturun.
              </p>
            </div>
          </Link>

          {/* Kart 7: Flex ve Grid Özellikleri */}
          <Link href="/layout/flex-and-grid-features">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaRocket className="text-indigo-500 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Flex ve Grid Özellikleri
                </h2>
              </div>
              <p className="mt-4 text-gray-600">
                Flex ve Grid özelliklerini kullanarak ileri düzey düzenler
                oluşturun.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
