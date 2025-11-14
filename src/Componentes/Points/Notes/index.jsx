import { useEffect, useState } from "react";
export default function Notes() {
  const [notas, setNotas] = useState(["", "", "", "", ""]);
  const [modalAberta, setModalAberta] = useState(false);
  const [texto, setTexto] = useState("");
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);

  const abrirModal = (index) => {
  setLinhaSelecionada(index);
  setTexto(notas[index] || "");
  setModalAberta(true);
  };

  // Evita o scroll do body quando a modal está aberta.
  useEffect(() => {
    if (modalAberta) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modalAberta]);

  const salvarNota = () => {
  const novasNotas = [...notas];
  novasNotas[linhaSelecionada] = texto.slice(0, 150);
  setNotas(novasNotas);
  setModalAberta(false);
  };
  return (
    <div className="absolute left-[101px] top-[172px]">
      <div className="bg-[#370020] w-[440px] h-[395px] rounded-3xl text-neutral-white p-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Notas
        </h2>
        <ul>
          {notas.map((nota, i) => (
          <li
            key={i}
            onClick={() => abrirModal(i)}
            className="border-b border-gray-300 pb-0.5 cursor-pointer hover:opacity-80 transition-all 
              duration-300 ease-in-out mb-5"
          >
            <span className="text-2xl truncate block max-w-full">
              {nota ? `${i + 1}. ${nota}` : `${i + 1}.`}
            </span>
          </li>
          ))}
        </ul>
      </div>


      {modalAberta && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-[#a4367f] text-white p-3 rounded-xl w-[300px] shadow-xl">
            <h2 className="text-2xl font-bold mb-2 text-center">Nota</h2>
            <textarea
              className="w-full h-26 p-2 bg-[#520e38] rounded-xl resize-none outline-none shadow-lg"
              maxLength={150}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              autoFocus
            />

            <div className="flex justify-end">
              <button
                onClick={salvarNota}
                className="px-4 py-1 rounded-xl bg-[#370020] text-white hover:bg-[#520e38] transition-all 
                duration-300 ease-in-out mt-2"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}