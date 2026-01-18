import logo from '/imagens/logo-branco.png';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-primary-green text-neutral-white h-[20vh] w-full p-4">
      <p className=''>
        Desenvolvido por Leandro Souza
      </p>
      <img 
        src={logo} 
        alt="Logo da empresa" 
        className="w-[220px] h-20 mx-10"/>
      <div className='gap-2 flex flex-col'>
        <p>Contato: (32) 99930-5110</p>
        <p>ouvidoria@rdftelecom.com.br</p>
        <p>Rua tiradentes, 75 - São Manoel, <br/> Rio pomba - MG </p>
      </div>
    </footer>
  );
}