import { Add } from "../../Icons";

export default function Pontos() {

  const li_style = "flex items-center gap-6 mb-5 text-2xl";
  const icon_style = "cursor-pointer hover:rotate-360 transition-all duration-500 ease-in-out";
  
  return (
    <div className="bg-[#370020] w-[440px] h-[395px] rounded-3xl absolute right-[101px] top-[172px] text-neutral-white p-6">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Seus Pontos
      </h2>
      <ul className="flex-col">
        <li className={li_style}><Add className={icon_style}/>Técnico: 0.7</li>
        <li className={li_style}><Add className={icon_style}/>Chat: 0.4</li>
        <li className={li_style}><Add className={icon_style}/>Proativo: 0.3</li>
        <li className={li_style}><Add className={icon_style}/>Extra: 2</li>
      </ul>
      <div className="flex pt-4 text-3xl">
        <p className="grow">Daily: 12</p>
        <p>Monthly: 12</p>
      </div>
      
    </div>
  )
}