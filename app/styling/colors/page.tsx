import { BackButton } from "@/app/ui/back-button";

export default function ColorsExample() {
  return (
    <div>
      <BackButton />
      <div className="bg-mysage text-white p-4">Mysage Rengi</div>
      <div className="bg-mybeige text-black p-4">Mybeige Rengi</div>
      <div className="bg-mypastel text-black p-4">Mypastel Rengi</div>
    </div>
  );
}
