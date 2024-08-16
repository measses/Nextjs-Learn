import { BackButton } from "@/app/ui/back-button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function GoogleFonts() {
  return (
    <div className={`${pacifico.className} text-2xl`}>
      <BackButton />
      <h1>Google Fonts ile Tipografi</h1>
      <p>Pacifico fontu, Google Fonts'tan alındı ve bu sayfada kullanıldı.</p>
    </div>
  );
}
// INFO: Bu sayfada Pacifico fontu kullanıldı. Bu font, Google Fonts'tan alındı ve bu sayfada kullanıldı.
