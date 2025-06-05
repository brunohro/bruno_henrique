import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="mx-auto my-10 max-w-4xl rounded-xl shadow-lg shadow-white/10 justify-between items-center flex px-6 py-4 bg-purple-500/10  text-white/50">
      <div className="text-2xl flex font-extrabold hover:cursor-pointer">
        <h1 className="text-white">B</h1>
        <h1 className="text-purple-500">H</h1>
      </div>
      <div>
        <nav className="gap-6 flex text-lg">
          <Link className="hover:text-white" href="/projetos">
            Projetos
          </Link>
          <Link className="hover:text-white" href="/">
            Currículo
          </Link>
          <Link className="hover:text-white" href="/">
            Contato
          </Link>
          <Link className="hover:text-white" href="/">
            Sobre
          </Link>
          <Link className="hover:text-white" href="/">
            Habilidades
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
