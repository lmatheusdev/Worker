import background from '../../assets/Imagens/points.png';
import Pontos from './Pontos';

export default function Points() {
  return (
    <div className='overflow-hidden relative'>
      <h1 className='absolute text-[64px] font-bold text-neutral-white top-[90px] left-1/2 
        -translate-x-1/2 -translate-y-1/2'
      >
        Anotações e Pontos
      </h1>
      <Pontos/>
      <img src={background}/>
    </div>
    
  )
}