import { motion } from "framer-motion";
import banner from "../../../assets/Imagens/slide1.png";

 
export default function Banner1({ isActive }) {

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="overflow-hidden relative text-primary-green">
      <motion.h1
        className="
          absolute text-[64px] font-bold
          top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        Worker
      </motion.h1>

      <motion.h2
        className="
          absolute text-[64px]
          top-1/2 left-1/10 -translate-y-1/2 
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.2}
      >
        Seu assistente de trabalho
      </motion.h2>

      <motion.p
        className="
          absolute text-[24px]
          bottom-1/8 left-1/14 -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.4}
      >
        Todos os links e funcionalidades que você precisa em um só lugar
      </motion.p>

      <img
        src={banner}
        alt=""
        className="w-full"
      />
    </div>
  );
}