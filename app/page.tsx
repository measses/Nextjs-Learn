import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* Özelleştirilmiş renklerin kullanıldığı div */}
      <div className="py-10 bg-mysage">
        <h3 className={`${pacifico.className} text-2xl text-white`}>
          Mert Araz, NextJs Öğreniyorum!
        </h3>
      </div>

      {/* Özel renklerin açıklamaları */}
      <div className="p-10">
        <h3 className="text-2xl font-bold mb-5">Renk Özelleştirme</h3>
        <div className="py-5 bg-mybeige">
          <p className="text-lg">
            Bu div, 'mybeige' rengiyle renklendirilmiştir.
          </p>
        </div>
        <div className="py-5 bg-mypastel">
          <p className="text-lg">
            Bu div, 'mypastel' rengiyle renklendirilmiştir.
          </p>
        </div>
        <div className="py-5 bg-mylight">
          <p className="text-lg">
            Bu div, 'mylight' rengiyle renklendirilmiştir.
          </p>
        </div>
      </div>

      {/* Layout kullanarak farklı renklerle bölümleme */}
      <div className="p-10">
        <h3 className="text-2xl font-bold mb-5">Layout Kullanımı </h3>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-10 bg-mysage">
            <p className="text-lg">
              Bu alan 'mysage' rengiyle renklendirilmiştir.
            </p>
          </div>
          <div className="flex-1 p-10 bg-mybeige">
            <p className="text-lg">
              Bu alan 'mybeige' rengiyle renklendirilmiştir.
            </p>
          </div>
          <div className="flex-1 p-10 bg-mypastel">
            <p className="text-lg">
              Bu alan 'mypastel' rengiyle renklendirilmiştir.
            </p>
          </div>
        </div>
      </div>

      {/* Tipografik bileşenlerin kullanımı */}
      <div className="p-10">
        <h3 className="text-2xl font-bold mb-5">Tipografik Bileşenler</h3>
        <h2 className={`${pacifico.className} text-3xl`}>Pacifico Fontu</h2>
        <p className="text-lg">
          Pacifico fontu, Google Fonts'tan alınmış ve bu sayfada kullanılmıştır.
        </p>
      </div>
    </>
  );
}
