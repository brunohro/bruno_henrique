"use client";
import React, { useState } from "react";
import { ArrowBigUpDash, Menu, X, ArrowBigDownDash } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-6">
      <div className="mx-auto bg-purple-500/10  text-white/50 max-w-4xl rounded-xl shadow-lg shadow-white/10">
        <div className="mx-auto mt-10 justify-between items-center flex px-6 py-4">
          <div className="text-2xl flex font-extrabold hover:cursor-pointer">
            <h1 className="text-white">B</h1>
            <h1 className="text-purple-500">H</h1>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? (
              <ArrowBigUpDash size={24} />
            ) : (
              <ArrowBigDownDash size={24} />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="pb-4 mx-6">
            <nav className="flex gap-4 text-sm justify-center">
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
        )}
      </div>
    </div>
  );
};

export default Header;
