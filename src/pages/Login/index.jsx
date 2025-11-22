import login from '../../assets/Imagens/login_page.png';
import AuthContainer from '../../Componentes/AuthContainer';
import ButtonAuth from '../../Componentes/ButtonAuth';
import Fieldset from '../../Componentes/Fieldset';
import FooterAuth from '../../Componentes/FooterAuth';

export default function Login() {
  return (
    <AuthContainer bannerSrc={login}>
        <header className='flex flex-col items-center justify-center mb-8 text-neutral-white'>
          <h1 className='text-6xl mb-32 font-bold'>Login</h1>
          <h2 className='text-2xl mb-25'>Boas-vindas! Faça o seu login.</h2>
        </header>
        
        <form className='flex flex-col items-center'>
          <Fieldset title="Email ou usuario:" type="email" marginBottom="mb-6"/>

          <Fieldset title="Senha:" type="password" marginBottom="mb-6"/>

          <ButtonAuth type="submit">Login</ButtonAuth>
        </form>

        <FooterAuth 
          text="Ainda não possui uma conta?" 
          linkText="Crie seu cadastro!" 
          linkHref="#"/>
    </AuthContainer>
  );
};