import { useNavigate } from 'react-router-dom';
import loginBanner from '../../assets/Imagens/login_page.png';
import AuthContainer from '../../Componentes/AuthContainer';
import ButtonAuth from '../../Componentes/ButtonAuth';
import Fieldset from '../../Componentes/Fieldset';
import FooterAuth from '../../Componentes/FooterAuth';
import Typography from '../../Componentes/Typography';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {

  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = (formData) => {
    const email = formData.get('email')
    const password = formData.get('password')
    const response = login(email, password)

    if (response.success) {
      navigate('/')
    } else {
      console.error(response.error)
    }
  };

  return (
    <AuthContainer bannerSrc={loginBanner}>
        <header className='flex flex-col items-center justify-center mb-8 text-neutral-white'>
          <Typography variant='h1' className='mb-32 font-bold'>Login</Typography>
          <Typography variant='h2' className='mb-25'>Boas-vindas! Faça o seu login.</Typography>
        </header>
        
        <form className='flex flex-col items-center' action={onSubmit}>
          <Fieldset title="Email ou usuario:" type="email" marginBottom="mb-6"/>

          <Fieldset title="Senha:" type="password" marginBottom="mb-6"/>

          <ButtonAuth type="submit">Login</ButtonAuth>
          
        </form>

        <FooterAuth 
          text="Ainda não possui uma conta?" 
          linkText="Crie seu cadastro!" 
          linkHref="/auth/register"/>
    </AuthContainer>
  );
};