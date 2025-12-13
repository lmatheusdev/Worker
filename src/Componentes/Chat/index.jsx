import { useState } from "react";
import logo from "../../assets/Imagens/chat_logo.png";
import { Send } from "../Icons";
import Modal from "../Modal";

export default function Chat({ aoFechar, aoAbrir, open }) {

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  async function handleSend() {
    if (!message.trim()) return;

    // 1. Atualiza interface com mensagem do usuário
    setChatHistory(prev => [...prev, { from: "user", text: message }]);

    // 2. Envia mensagem para o backend
    try {
      const res = await fetch("http://localhost:8000/api/chat/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      // 3. (por enquanto) exibe a resposta confirmando o recebimento
      setChatHistory(prev => [
        ...prev,
        { from: "agent", text: `Servidor recebeu: ${data.received}` },
      ]);

    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
    }

    // limpa textarea
    setMessage("");
  }

  return(
    <>
    <div 
      className="flex justify-center w-20 h-20 rounded-[50%] bg-primary-green 
        fixed bottom-10 right-10 hover:cursor-pointer hover:scale-120 transition-all duration-300"
      onClick={() => aoAbrir()}
    >
      <img src={logo} alt="" className="w-20 h-20"/>
    </div>

    
      <Modal open={open} aoFechar={aoFechar} type="chat">
          <div 
            className="fixed flex flex-col overflow-hidden bg-neutral-white text-white rounded-xl w-[400px] h-[600px] right-35 bottom-20 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-center w-full h-20 bg-primary-green ">
              <h2 className="text-2xl font-bold  text-center">Chat Assistente</h2>
            </header>

            <section className="flex flex-col grow w-full p-4 gap-4 overflow-y-scroll">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={msg.from === "user" ? 
                      "bg-primary-green max-w-fit ml-auto rounded-md p-2" : 
                      "bg-primary-green max-w-fit mr-auto rounded-md p-2"}
                  >
                    {msg.text}
                  </div>
                ))}
                  
            </section>

            <footer className="flex w-full border-t-2 border-primary-green py-2 gap-4 justify-center items-center">
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="bg-primary-green border-0 w-[300px] h-[50px] px-2 rounded-md focus:outline-secondary-green"/>
              <span onClick={handleSend}> 
                <Send className="w-10 h-10  p-1 bg-primary-green rounded-[50%] hover:scale-110 transition-all duration-300"/>
              </span>
            </footer>
          </div>
      </Modal>
    </>
  );
};