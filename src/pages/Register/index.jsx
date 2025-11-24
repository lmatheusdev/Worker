import { useNavigate } from 'react-router-dom';
import registerBanner from '../../assets/Imagens/register_page.png';
import AuthContainer from '../../Componentes/AuthContainer';
import ButtonAuth from '../../Componentes/ButtonAuth';
import Fieldset from '../../Componentes/Fieldset';
import FooterAuth from '../../Componentes/FooterAuth';
import Typography from '../../Componentes/Typography';
import { useAuth } from '../../hooks/useAuth';

export default function Register() {

  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const response = register(name, email, password);

    if (response.success) {
      navigate('/auth/login');
    } else {
      console.error(response.error);
    };
  };

  return (
    <AuthContainer bannerSrc={registerBanner}>
        <header className='flex flex-col items-center justify-center mb-8 text-neutral-white'>
          <Typography variant='h1' className='mb-32 font-bold'>Cadastro</Typography>
          <Typography variant='h2' className='mb-25'>Olá! Preencha seus dados</Typography>
        </header>
        
        <form className='flex flex-col items-center' action={onSubmit}>
          <Fieldset title="Nome completo:" type="text" marginBottom="mb-6"/>
          <Fieldset title="Setor:" type="text" marginBottom="mb-6"/>
          <Fieldset title="Email:" type="email" marginBottom="mb-6"/>
          <Fieldset title="Senha:" type="password" marginBottom="mb-6"/>

          <ButtonAuth type="submit">Cadastrar-se</ButtonAuth>
        </form>

        <FooterAuth 
          text="Já possui uma conta?" 
          linkText="Faça o seu Login!" 
          linkHref="/auth/login"/>
    </AuthContainer>
  );
};