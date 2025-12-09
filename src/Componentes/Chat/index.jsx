import logo from "../../assets/Imagens/chat_logo.png";
import Modal from "../Modal";

export default function Chat({ aoFechar, aoAbrir, open }) {

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
            className="fixed overflow-hidden bg-neutral-white text-white rounded-xl w-[400px] h-[600px] right-35 bottom-20 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-center w-full h-[100px] bg-primary-green">
              <h2 className="text-2xl font-bold mb-2 text-center">Chat Assistente</h2>
            </header>

            <div className="flex justify-end">
              
            </div>
          </div>
      </Modal>
    </>
  );
};