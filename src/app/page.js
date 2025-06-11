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
        {/* DIVISAO 1  */}
        <div>
          <Image
            className="rounded-full"
            src="/brunoOl.png"
            alt="Bruno Henrique"
            width={200}
            height={200}
          />
        </div>
        {/* DIVISAO 2  */}
        <div>
          <div className="flex items-center p-2 gap-2 justify-end text-purple-500/40">
            <h1> Baixar CV</h1>
            <div>
              <Image
                src="/ArrowLineDown.png"
                alt="Arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="flex items-center border-2 p-2 rounded-2xl hover:cursor-pointer border-purple-500/40 gap-2 text-purple-500/40">
            <Image
              src="/WhatsappLogo.png"
              alt="Whatsapp"
              width={32}
              height={32}
            />
            <h1>Vamos conversar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
