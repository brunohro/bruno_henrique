import React from "react";
import Image from "next/image";

const ButtonConversar = () => {
  return (
    <a
      href="https://wa.me/5584998152063"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center border-2 p-2 rounded-2xl hover:cursor-pointer border-purple-500/40 hover:border-purple-500 gap-2 text-purple-500/40 transition-all duration-300 ease-in-out"
    >
      <Image src="/WhatsappLogo.png" alt="Whatsapp" width={32} height={32} />
      <h1>Vamos conversar</h1>
    </a>
  );
};

export default ButtonConversar;
