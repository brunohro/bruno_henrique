import Saudacoes from "@/components/Saudacoes";
import Image from "next/image";
import ButtonConversar from "../ButtonConversar";

const SecaoInicial = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white font-sans p-6">
      <div className="flex flex-col gap-4 justify-between mx-auto">
        <div>
          <div className="flex gap-6 justify-center m-4">
            <Image src="/github.png" alt="github" width={32} height={32} />
            <Image src="/linkedin.png" alt="github" width={32} height={32} />
            <Image src="/behance.svg" alt="github" width={32} height={32} />
          </div>
          <div className="flex justify-center m-4">
            <Image
              className="rounded-full"
              src="/BH1.png"
              alt="Bruno Henrique"
              width={300}
              height={300}
            />
          </div>
          <div className="flex max-w-sm">
            <div className="bg-purple-500/10 rounded-2xl flex gap-2 py-2 px-4 ">
              <h1>👋</h1>
              <h1 className="text-purple-400 font-medium">Saudações!</h1>
            </div>
          </div>
          <div className="font-bold text-6xl py-2">
            <h1> Bruno</h1>
            <h1>Henrique</h1>
          </div>
          <p>Front-end developer</p>
        </div>
        {/* DIVISAO 1  */}
        {/* DIVISAO 2  */}
        <div className="flex mt-4">
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
          <ButtonConversar />
        </div>
      </div>
    </div>
  );
};

export default SecaoInicial;
