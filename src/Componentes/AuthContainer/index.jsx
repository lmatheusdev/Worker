
export default function AuthContainer({ children, bannerSrc }) {
  return (
    <div className='flex bg-dark-green'>
      <figure>
        <img src={bannerSrc} alt="banner da tela de autenticação" 
          className='
            h-screen w-[50vw]
          '/>
      </figure>
      <section className='flex w-[50vw] flex-col p-8'>
        {children}
      </section>
    </div>
  );
};