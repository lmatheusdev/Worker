import { useEffect } from "react";

export default function Modal({ children, open, overLayClassName ="", aoFechar, type="" }) {

  const modalAberta = open;

  useEffect(() => {
      if (modalAberta && type !== "chat") document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    }, [modalAberta, type]);

    useEffect(()=>{
      if (modalAberta === false) return;
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          aoFechar();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  },[modalAberta, aoFechar]);

  return(
    modalAberta &&
    <div 
      className={`fixed inset-0 z-10 ${overLayClassName}`}
      onClick={() => aoFechar()}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};