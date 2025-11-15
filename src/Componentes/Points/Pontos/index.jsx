import { useState } from "react";
import { Add } from "../../Icons";

export default function Pontos() {

  const [list, setList] = useState([
    { name: "Técnico", points: 0},
    { name: "Chat", points: 0 },
    { name: "Proativo", points: 0 },
    { name: "Extra", points: 0 },
  ]);

  function aoSomarPontos(index) {
  const n = index === 0 ? 0.7 : index === 1 ? 0.4 : index === 2 ? 0.3 : 0.1;
  setList(prevList =>
    prevList.map((item, i) =>
      i === index ? { ...item, points: item.points + n } : item
    )
  );
}
  
  
  return (
    <div className="bg-[#370020] w-[440px] h-[395px] rounded-3xl absolute right-[101px] top-[172px] text-neutral-white p-6">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Seus Pontos
      </h2>
      <ul className="flex-col">
        {list.map((item, index) =>
          <li className="flex items-center gap-6 mb-5 text-2xl" key={index}>
            <span onClick={() => aoSomarPontos(index)}>
              <Add className="cursor-pointer hover:rotate-360 transition-all duration-500 ease-in-out"/>
            </span>
            {`${item.name}: ${item.points.toFixed(1)}`}
          </li>
        )}
      </ul>
      <div className="flex pt-4 text-3xl">
        <p className="grow">Daily: 12</p>
        <p>Monthly: 12</p>
      </div>
    </div>
  )
}