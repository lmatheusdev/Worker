
export default function AuthContainer({ children, bannerSrc }) {
  return (
    <div className='flex bg-dark-green h-screen w-full overflow-hidden'>
      <figure className="flex-1 hidden md:block">
        <img src={bannerSrc} alt="banner da tela de autenticação" 
          className='
            h-full w-full
          '/>
      </figure>
      <section className='flex flex-col flex-1 h-full items-center justify-center overflow-hidden p-6'>
        <div>
          {children}
        </div>
      </section>
    </div>
  );
};