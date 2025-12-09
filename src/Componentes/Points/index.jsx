import bgImage from '../../assets/imagens/points.png';
import Notes from './Notes';
import Pontos from './Pontos';

export default function Points({aoAbrir, aoFechar, open}) {
  return (
    <div 
      className='overflow-hidden'
      style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%', padding: '40px'}}
    >
      <h1 className='text-[64px] font-bold text-neutral-white text-center mb-10'
      >
        Anotações e Pontos
      </h1>
      <div className='grid grid-cols-2 items-stretch gap-20 ml-10 mr-10'>
        <Notes aoAbrir={aoAbrir} aoFechar={aoFechar} open={open}/>
        <Pontos/>
      </div>
      
    </div>
    
  )
}