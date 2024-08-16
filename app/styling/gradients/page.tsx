import { BackButton } from "@/app/ui/back-button";

export default function GradientsExample() {
  return (
    <div>
      <BackButton />
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
        Sağdan Sola Gradyan
      </div>
      <div className="bg-gradient-to-b from-red-500 to-yellow-500 text-white p-4 mt-4">
        Yukarıdan Aşağıya Gradyan
      </div>
    </div>
  );
}
