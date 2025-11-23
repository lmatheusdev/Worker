import { Link } from "react-router-dom";
import mini from "../../assets/Imagens/logo-mini.png";
import logo from "../../assets/Imagens/logo.png";

export default function Navbar() {

  const links = [
    {name: "Home", href: "#"},
    {name: "Servicos", href: "#"},
    {name: "Sobre", href: "#"},
    {name: "Contato", href: "#"},
    {name: "Blog", href: "#"},
    {name: "Logout", href: "/auth/logout"}
  ];

  return (
    <nav className="h-20 w-full flex justify-between items-center overflow-hidden position-absolute top-0">
      <img src={logo} alt="Logo da empresa" className="w-[180px] h-[60px] ml-10"/>
      <ul className="
      text-primary-green flex text-[18px]/[120%] font-bold cursor-pointer gap-x-18
        transition-all duration-500 ease-in-out"
      >
        {links.map((link) => (
          <li key={link} className="group flex flex-col items-center">
            <Link to={link.href} className="mb-2 hover:opacity-70 transition-all duration-300">{link.name}</Link>
            <span className="
              opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-left 
              bg-tertiary-green w-6 h-1 rounded-2xl transition-all duration-300"
            />
          </li>
        ))}
      </ul>
      <img src={mini} alt="Logo da empresa" className="w-[60px] h-[60px] mr-10"/>
    </nav>
  );
}
