import logo from '../../assets/Imagens/logo-branco.png';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-primary-green text-neutral-white h-[120px] w-full p-4">
      <p className=''>Desenvolvido por Leandro Souza</p>
      <img 
        src={logo} 
        alt="Logo da empresa" 
        className="w-[220px] h-20"/>
      <div className=''>
        <p>Contato: (11) 99999-9999</p>
        <p>Email: 8H7m9@example.com</p>
        <p>Redes Sociais: @empresa</p>
      </div>
    </footer>
  );
}