import Card from "./Componentes/Card"
import Container from "./Componentes/Container"
import Footer from "./Componentes/Footer"
import Main from "./Componentes/Main"
import Navbar from "./Componentes/Navbar"
import Points from "./Componentes/Points"
import Slider from "./Componentes/Slider"


function App() {

  const cards = [
  {header: "Home", color: 1},
  {header: "Analysis", color: 2}, 
  {header: "Daily apps", color: 3},
  {header: "Updates", color: 2},
  {header: "Utilities", color: 3},
  {header: "Study", color: 1},
]

  const icons = [
    { name: "hubsoft", card: "Home", link: "https://rdfnet.hubsoft.com.br/dashboard"}, 
    { name: "callcenter", card: "Home", link: "https://rdfnet.com.br/callcenter/"}, 
    { name: "chatmix", card: "Home", link: "https://srv2.chatmix.com.br"}, 
    { name: "sat", card:"Analysis", link: "https://rdfnet.com.br/sat/index.html"}, 
    { name: "datacom", card:"Analysis", link: "https://187.109.80.53:8101/"}, 
    { name: "smartolt", card:"Analysis", link: "https://rdfnet.smartolt.com/"}, 
    { name: "grafana", card:"Analysis", link: "http://grafana.rdfnet.com.br:3000/login"}, 
    { name: "uisp", card:"Analysis", link: "https://uisp.rdfnet.com.br/"}, 
    { name: "spotify", card:"Daily apps", link: "https://open.spotify.com/intl-pt"}, 
    { name: "fiberschool", card:"Study", link: "https://academia.rdftelecom.com.br/area/vitrine"},
    { name: "trello", card:"Daily apps", link: "https://trello.com/pt-BR"},
    { name: "chatgpt", card:"Daily apps", link: "https://chatgpt.com/"},
    { name: "gemini", card:"Daily apps", link: "https://gemini.google.com/?hl=pt-BR"},
    { name: "youtube", card:"Daily apps", link: "https://www.youtube.com/"},
  ];

  // estilo dos icones
  const style = "bg-neutral-white p-2 rounded-lg w-[55px] h-[55px] flex justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200 ease-in-out";
  
  return (
    <Container>
      <Main>
        <Navbar/>
        <Slider/>
        <section className="grid grid-cols-3 items-stretch ">
          {cards.map((card, index) => (
            <Card key={index} color={card.color}>
              <Card.Header>
                {card.header}  
              </Card.Header>
              <Card.Body>
                {icons.map((icon, index) => (
                  icon.card === card.header ? 
                  <a key={index} href={icon.link ? icon.link : "#"} target="_blank" rel="noreferrer">
                    <div className={style}>
                      <img src={`icons/${icon.name}.png`} alt={icon.name} />
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
