import { useEffect, useState } from "react";
import { Add, Del, Options } from "../../Icons";

export default function Pontos() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [list, setList] = useState([
    { name: "Técnico", points: 0},
    { name: "Chat", points: 0 },
    { name: "Proativo", points: 0 },
    { name: "Extra", points: 0 },
  ]);
  const [daysWorked, setDaysWorked] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => { 
    if (totalPoints === 0 && daysWorked === 0) return;

    localStorage.setItem("pontos", JSON.stringify(list));
    localStorage.setItem("diasTrabalhados", JSON.stringify(daysWorked));
    localStorage.setItem("totalPontos", JSON.stringify(totalPoints));
  }, [list, daysWorked, totalPoints]);
  
  useEffect(() => {
    const pontosSalvos = localStorage.getItem("pontos");
    const diasSalvos = localStorage.getItem("diasTrabalhados");
    const totalSalvo = localStorage.getItem("totalPontos");
    if (pontosSalvos) {
      setList(JSON.parse(pontosSalvos));
    }
    if (diasSalvos) {
      setDaysWorked(JSON.parse(diasSalvos));
    }
    if (totalSalvo) {
      setTotalPoints(JSON.parse(totalSalvo));
    }
  }, []);

  const dailyPoints = list.reduce((total, item) => total + item.points, 0);
  const monthlyPoints = daysWorked === 0 ? 0 : totalPoints / daysWorked;

  function aoAlterarDiasTrabalhados() {
  setDropdownOpen(false);
  setTotalPoints(prevTotal => prevTotal + dailyPoints);
  setDaysWorked(prevDays => prevDays + 1);
  setList(prevList =>
    prevList.map(item => ({ ...item, points: 0 }))
  );
}

function aoZerar() {
  setDropdownOpen(false);
  setTotalPoints(0);
  setDaysWorked(0);
  setList(prevList =>
    prevList.map(item => ({ ...item, points: 0 }))
  );
  localStorage.removeItem("pontos");
  localStorage.removeItem("diasTrabalhados");
  localStorage.removeItem("totalPontos");
}
  
  function aoAlterarPontos(operacao, index) {
    const n = index === 0 ? 0.7 : index === 1 ? 0.4 : index === 2 ? 0.3 : 0.1;
    const pontos = operacao === "somar" ? n * 1 : n * -1;
    setList(prevList =>
      prevList.map((item, i) =>
        i === index ? { ...item, points: item.points + pontos } : item
      )
    );
  }
  
  return (
    <div className="bg-[#370020] w-[440px] h-[395px] rounded-3xl absolute right-[101px] top-[172px] text-neutral-white p-6">
      <header className="flex mb-10 items-center">
        <h2 className="text-4xl font-bold grow text-center ml-8">
          Seus Pontos
        </h2>
        <span 
          className="cursor-pointer mt-2 hover:rotate-90 transition-all duration-500 ease-in-out"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Options/>
        </span>
        <div className="absolute right-6 top-16 bg-white text-black rounded-xl shadow-lg z-10 overflow-hidden">
          {dropdownOpen && (
              <ul className="flex flex-col items-center p-2">
                <li
                  onClick={() => aoAlterarDiasTrabalhados()}
                  className=" cursor-pointer hover:bg-gray-200">
                    Finalizar
                </li>
                <li className="cursor-pointer hover:bg-gray-200">Editar</li>
                <li 
                  className="cursor-pointer hover:bg-gray-200"
                  onClick={() => aoZerar()}
                >Zerar
                </li>
              </ul>
          )}
        </div>
      </header>
      
      <ul className="flex-col">
        {list.map((item, index) =>
          <li className="flex items-center gap-6 mb-5 text-2xl" key={index}>
            <span onClick={() => aoAlterarPontos("somar", index)}>
              <Add className="cursor-pointer hover:rotate-360 transition-all duration-500 ease-in-out"/>
            </span>
            <span onClick={() => aoAlterarPontos("subtrair", index)}>
              <Del className="cursor-pointer hover:rotate-360 transition-all duration-500 ease-in-out"/>
            </span>
            {`${item.name}: ${item.points.toFixed(1)}`}
          </li>
        )}
      </ul>

      <footer className="flex pt-4 text-3xl">
        <p className="grow">{`Daily: ${dailyPoints.toFixed(1)}`}</p>
        <p>{`Monthly: ${monthlyPoints.toFixed(1)}`}</p>
      </footer>
    </div>
  )
}