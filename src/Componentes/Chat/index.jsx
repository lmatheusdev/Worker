import { getSessionId } from "@/utils/session";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Send } from "../Icons";
import Modal from "../Modal";
import TypingLoader from "../TypingLoader";
import logo from "/imagens/chat_logo.png";

export default function Chat({ aoFechar, aoAbrir, open }) {

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSlowMessage, setShowSlowMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const id = getSessionId();
  const API_URL = import.meta.env.VITE_API_URL;

  const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSend = useCallback(async () => {
    const currentMessage = message;

    if (!currentMessage.trim()) return;

    setMessage("");
    setIsLoading(true);

    setChatHistory(prev => [
      ...prev,
      { from: "user", text: currentMessage },
    ]);

    const timer = setTimeout(() => setShowSlowMessage(true), 8000);

    try {
      const res = await fetch(`${API_URL}/api/chat/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage, session_id: id }),
      });

      const data = await res.json();

      setChatHistory(prev => [
        ...prev,
        { from: "agent", text: data.reply },
      ]);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
    } finally {
      setIsLoading(false);
      setShowSlowMessage(false);
      clearTimeout(timer);
    }
  },[message, id, API_URL]);

  const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
};

  return(
    <>
    <div 
      className="flex justify-center w-20 h-20 z-10 rounded-[50%] bg-primary-green 
        fixed bottom-10 right-10 hover:cursor-pointer hover:scale-120 transition-all duration-300"
      onClick={() => aoAbrir()}
    >
      <img src={logo} alt="" className="w-20 h-20"/>
    </div>
    
      <Modal open={open} aoFechar={aoFechar} type="chat">
          <div 
            className="fixed flex flex-col overflow-hidden bg-neutral-white text-white rounded-xl max-w-full w-[30vw] h-[70vh] right-35 bottom-20 shadow-xl overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-center w-full h-20 bg-primary-green">
              <h2 className="text-2xl font-bold  text-center">Chat Assistente</h2>
            </header>

            <AnimatePresence mode="popLayout">
              <section className="flex flex-col w-full h-full p-4 gap-4 overflow-y-scroll">
                <motion.div 
                  className="bg-primary-green max-w-fit mr-auto rounded-md p-2"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}>
                      Olá, Sou seu assistente virtual, como posso ajudar?
                </motion.div>
                {chatHistory.map((msg, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    key={index}
                    className={msg.from === "user" ? 
                      "bg-primary-blue max-w-fit ml-auto rounded-md p-2" : 
                      "bg-primary-green max-w-fit mr-auto rounded-md p-2"}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </section>
              {isLoading && (
                <motion.div
                  key="loader-container"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col items-start"
                >
                  <TypingLoader />
                  <AnimatePresence>
                    {showSlowMessage && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary-green font-medium ml-2"
                      >
                        O chat está pensando.. Aguarde um pouco!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            <footer className="flex bg-primary-green w-full border-t-2 border-primary-green p-2 gap-4 justify-center items-center">
              <textarea 
                autoFocus
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="bg-primary-blue border-0 w-full h-[50px] px-2 rounded-md focus:outline-primary-green"/>
              <button onClick={handleSend}> 
                <Send className="w-10 h-10 p-1 bg-primary-blue rounded-[50%] hover:scale-110 transition-all duration-300"/>
              </button>
            </footer>
          </div>
      </Modal>
    </>
  );
};