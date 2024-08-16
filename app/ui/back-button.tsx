import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export function BackButton() {
  return (
    <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-200 mb-4">
      <FaArrowLeft className="mr-2" />
      Geri Dön
    </Link>
  );
}
