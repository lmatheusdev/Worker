import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
 
export default function Slide({ n, h1, h2, p, isActive }) {

  

  return (
    n === 1 ? 
    <Banner1
      h1={h1}
      h2={h2}
      p={p}
      isActive={isActive}
      
    /> : 
    <Banner2
      h1={h1}
      h2={h2}
      p={p}
      isActive={isActive}
      
    />
  );
}