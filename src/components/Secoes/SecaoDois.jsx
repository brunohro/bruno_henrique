import React from "react";
import { CodeXml } from "lucide-react";

const SecaoDois = () => {
  return (
    <div className="mx-20">
      <div className="mx-auto flex flex-col justify-center items-center gap-10">
        {/* Divisão Um */}
        <div className="max-w-sm w-full min-h-[350px] flex flex-col border-2 rounded-4xl border-purple-500/40 hover:border-purple-500 cursor-pointer items-center px-8 py-10 text-center transition-all duration-300 ease-in-out">
          <div className="mb-6">
            <CodeXml width={64} height={64} />
          </div>
          <h2 className="text-xl font-extralight">3 anos como</h2>
          <h1 className="text-2xl font-bold mt-2">Programador</h1>
        </div>

        {/* Divisão Dois */}
        <div className="max-w-sm w-full min-h-[350px] flex flex-col border-2 rounded-4xl border-purple-500/40 hover:border-purple-500 cursor-pointer items-center px-8 py-10 text-center transition-all duration-300 ease-in-out">
          <div className="mb-6">
            <CodeXml width={64} height={64} />
          </div>
          <h2 className="text-xl font-extralight">Formado em</h2>
          <h1 className="text-2xl font-bold mt-2">
            Técnico em Informática - IFRN
          </h1>
        </div>

        {/* Divisão Três */}
        <div className="max-w-sm w-full min-h-[350px] flex flex-col border-2 rounded-4xl border-purple-500/40 hover:border-purple-500 cursor-pointer items-center px-8 py-10 text-center transition-all duration-300 ease-in-out">
          <div className="mb-6">
            <CodeXml width={64} height={64} />
          </div>
          <h2 className="text-xl font-extralight">Graduando em</h2>
          <h1 className="text-2xl font-bold mt-2">
            Análise e Desenvolvimento de Sistemas - IFRN
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecaoDois;
