import Card from "./Componentes/Card"
import Container from "./Componentes/Container"
import Footer from "./Componentes/Footer"
import Main from "./Componentes/Main"
import Navbar from "./Componentes/Navbar"
import Points from "./Componentes/Points"
import Slider from "./Componentes/Slider"


function App() {

  const cards = [
  {header: "Home", iconInt: 1, iconFinal: 3, color: 1},
  {header: "Analysis", iconInt: 4, iconFinal: 8, color: 2}, 
  {header: "Daily apps", iconInt: 6, iconFinal: 10, color: 3},
  {header: "Updates", iconInt: 1, iconFinal: 3, color: 2},
  {header: "Utilities", iconInt: 4, iconFinal: 7, color: 3},
  {header: "Tools", iconInt: 4, iconFinal: 7, color: 1},
]

  const icons = [
    {n: 1, link: "https://rdfnet.hubsoft.com.br/dashboard"}, // HubSoft
    {n: 2, link: "https://rdfnet.com.br/callcenter/"}, // Call Center
    {n: 3, link: "https://srv2.chatmix.com.br"}, // ChatMix
    {n: 4, link: "https://rdfnet.com.br/sat/index.html"}, // SAT
    {n: 5, link: "https://187.109.80.53:8101/"}, // datacom
    {n: 6, link: "https://rdfnet.smartolt.com/"}, // SmartOLT
    {n: 7, link: "http://grafana.rdfnet.com.br:3000/login"}, // Grafana
    {n: 8, link: "https://uisp.rdfnet.com.br/"}, // UISP
    {n: 9}, 
    {n: 10},
    {n: 11}
  ];

  // estilo dos icones
  const style = "bg-neutral-white p-2 rounded-lg w-[55px] h-[55px] flex justify-center items-center cursor-pointer";
  
  return (
    <Container>
      <Main>
        <Navbar/>
        <Slider/>
        <section className="grid grid-cols-3 items-stretch">
          {cards.map((card) => (
            <Card color={card.color}>
              <Card.Header>
                {card.header}  
              </Card.Header>
              <Card.Body>
                {icons.map((icon) => (
                  icon.n >= card.iconInt && icon.n <= card.iconFinal ? 
                  <a href={icon.link ? icon.link : "#"} target="_blank" rel="noreferrer">
                    <div className={style}>
                      <img key={icon.n} src={`icons/${icon.n}.png`}/>
                    </div>
                  </a>
                  : ""
                ))}
              </Card.Body>
            </Card>
          ))}
        </section>
        <section>
          <Points/>
        </section>
      </Main>
      <Footer/>
    </Container>
  )
}

export default App
