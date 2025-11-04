import Card from "./Componentes/Card"
import Container from "./Componentes/Container"
import Main from "./Componentes/Main"
import Navbar from "./Componentes/Navbar"
import Section from "./Componentes/Section"
import Slider from "./Componentes/Slider"


function App() {

  const icons = [
    1,2,3,4,5,6,7,8,9,10
  ];

  const style = "bg-neutral-white p-2 rounded-lg w-[50px] h-[50px]";
  
  return (
    <Container>
      <Main>
        <Navbar/>
        <Slider/>
        <Section>
          <Card color={1}>
            <Card.Header>
              To do list  
            </Card.Header>
            <Card.Body>
              {icons.map((icon) => (
                icon <= 3 ? 
                <div className={style}>
                  <img key={icon} src={`icons/${icon}.png`}/>
                </div>
                : ""
              ))}
            </Card.Body>
          </Card>
          <Card color={2}>
            <Card.Header>
              Principal Links 
            </Card.Header>
            <Card.Body>
              {icons.map((icon) => (
                icon >= 4 && icon <= 6 ?
                <div className={style}>
                  <img key={icon} src={`icons/${icon}.png`} alt="" />
                </div>
                : ""
              ))}
            </Card.Body>
          </Card>
          <Card color={3}>
            <Card.Header>
              To do list  
            </Card.Header>
            <Card.Body>
              {icons.map((icon) => (
                icon >= 6 && icon <= 10 ? 
                <div className={style}>
                  <img key={icon} src={`icons/${icon}.png`} alt="" />
                </div>
                : ""
              ))}
            </Card.Body>
          </Card>
        </Section>
      </Main>
    </Container>
  )
}

export default App
