import React from "react";
import Image from "next/image";
import Saudacoes from "../Saudacoes";

const SecaoTres = () => {
  return (
    <div className="mx-6">
      {/* Primeira divisão */}
      <div className="flex justify-center m-4 mt-30">
        <Image
          className="rounded-full"
          src="/BH2.JPG"
          alt="Bruno Henrique"
          width={200}
          height={200}
        />
      </div>
      {/* Segunda divisão */}
      <div className="max-w-md mx-auto mt-5 mb-10">
        <Saudacoes
          emoji="🤔"
          titulo="Sobre mim!"
          primeroNome="Bruno"
          segundoNome="Henrique"
        />
        {/* Terceira divisão */}
        <div className="font-extralight text-md flex flex-col gap-4 text-zinc-400 text-justify leading-7 mt-5">
          <p>
            Desenvolvedor apaixonado por tecnologia, com mais de 2 anos de
            experiência na área de desenvolvimento de software. Trabalho com
            React, Next.js (inclusive neste portfólio), Django, Python, C#, PHP
            e outras tecnologias que me desafiem a evoluir como desenvolvedor.
          </p>
          <p>
            Formado como Técnico em Informática pelo IFRN e atualmente cursando
            Análise e Desenvolvimento de Sistemas. Tenho grande interesse em
            desenvolvimento Front-end com React e Next.js, além de trabalhar com
            frameworks como Django que permite o desenvolvimento completo de uma
            aplicação ( backend e frontend ).
          </p>
          <p>
            🚀 Todos os dias buscando ser melhor do que ontem — com código
            limpo, boas práticas e curiosidade constante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecaoTres;
