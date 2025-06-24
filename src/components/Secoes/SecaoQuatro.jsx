import React from "react";
import Saudacoes from "../Saudacoes";
import Image from "next/image";

const SecaoQuatro = () => {
  return (
    <div className="max-w-md mx-auto mt-30 mb-10">
      <Saudacoes
        emoji="🔗"
        titulo="Skills"
        primeroNome="Tecnologias"
        segundoNome="e habilidades"
      />

      <div className="mt-8 font-extralight text-lg">
        <h1>Tecnologias que utilizo no dia a dia</h1>
        <div className="flex gap-4 mt-4">
          <Image
            className="rounded-full"
            src="/Vector.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/TypeScript.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Shape.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Nextjs.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Javascript.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/HTML5.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Github.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="mt-8 font-extralight text-lg">
        <h1>Tecnologias que já realizei projetos</h1>
        <div className="flex gap-4 mt-4">
          <Image
            className="rounded-full"
            src="/Vector.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/TypeScript.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Shape.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Nextjs.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Javascript.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/HTML5.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
          <Image
            className="rounded-full"
            src="/Github.svg"
            alt="Bruno Henrique"
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
};

export default SecaoQuatro;
