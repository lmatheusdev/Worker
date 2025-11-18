import { useEffect, useState } from "react";
export default function Notes() {

  const [notas, setNotas] = useState([]);
  const [modalAberta, setModalAberta] = useState(false);
  const [texto, setTexto] = useState("");
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);


  useEffect(() => { 
    const notasSalvas = localStorage.getItem("notas");
    console.log(notasSalvas);
    if (notasSalvas) {
      setNotas(JSON.parse(notasSalvas));
    }
  },[]);

  useEffect(() => { 
    if (notas.length > 0) {
      localStorage.setItem("notas", JSON.stringify(notas));
    }
  }, [notas]);

  // Evita o scroll do body quando a modal está aberta.
  useEffect(() => {
    if (modalAberta) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modalAberta]);

  useEffect(()=>{
      if (modalAberta === false) return;
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setModalAberta(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  },[modalAberta]);
  

  const abrirModal = (index) => {
  setLinhaSelecionada(index);
  setTexto(notas[index] || "");
  setModalAberta(true);
  };

 

  const salvarNota = () => {
  const novasNotas = [...notas];
  novasNotas[linhaSelecionada] = texto.slice(0, 150);
  setNotas(novasNotas);
  setModalAberta(false);
  };
  return (
    <div className="w-30%">
      <div className="bg-dark-purple  rounded-3xl text-neutral-white p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Notas
        </h2>
        <ul>
          {notas.map((nota, i) => (
          <li
            key={i}
            onClick={() => abrirModal(i)}
            className="border-b border-neutral-white pb-0.5 cursor-pointer hover:opacity-80 transition-all 
              duration-300 ease-in-out mb-10"
          >
            <span className="text-2xl truncate block max-w-full ">
              {nota ? `${i + 1}. ${nota}` : `${i + 1}.`}
            </span>
          </li>
          ))}
        </ul>
      </div>


      {modalAberta && (
        <div 
            className="fixed inset-0 backdrop-blur-xs flex items-center justify-center"
            onClick={() => setModalAberta(false)}
        >
          <div 
            className="bg-secondary-purple text-white p-3 rounded-xl w-[350px] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-2 text-center">Nota</h2>
            <textarea
              className="w-full h-36 p-2 bg-tertiary-purple rounded-xl resize-none outline-none shadow-lg"
              maxLength={150}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              autoFocus
            />

            <div className="flex justify-end">
              <button
                onClick={salvarNota}
                className="px-4 py-1 rounded-xl bg-dark-purple text-neutral-white hover:bg-tertiary-purple transition-all 
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