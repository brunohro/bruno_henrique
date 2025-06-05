import React from "react";

const Saudacoes = () => {
  return (
    <div>
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
    </div>
  );
};

export default Saudacoes;
