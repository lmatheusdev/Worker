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
          top-[71px] left-1/2 -translate-x-1/2 -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <h1>Worker</h1>
      </motion.h1>

      <motion.h2
        className="
          absolute text-[64px]
          top-[181px] left-[132px] -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.2}
      >
        <h2>Seu assistente de trabalho</h2>
      </motion.h2>

      <motion.p
        className="
          absolute text-[24px]
          top-[301px] left-[95px] -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.4}
      >
        <p>Todos os links e funcionalidades que você precisa em um só lugar</p>
      </motion.p>

      <img
        src={banner}
        alt=""
        className="w-full"
      />
    </div>
  );
}