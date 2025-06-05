import Saudacoes from "@/components/Saudacoes";
import Image from "next/image";
export default function Home() {
  return (
    <div className="mx-auto max-h-screen p-6 space-y-8 text-white font-sans">
      <div className="flex justify-between max-w-2xl mx-auto">
        <div>
          <Saudacoes />
          <p>Front-end developer</p>
          <div className="flex gap-2">
            <Image src="/github.png" alt="github" width={32} height={32} />
            <Image src="/linkedin.png" alt="github" width={32} height={32} />
            <Image src="/behance.svg" alt="github" width={32} height={32} />
          </div>
        </div>
        <div>d2</div>
        <div>D3</div>
      </div>
    </div>
  );
}
