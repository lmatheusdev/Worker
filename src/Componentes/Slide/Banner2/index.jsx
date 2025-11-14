import { motion } from "framer-motion";
import banner from "../../../assets/Imagens/slide2.png";

 
export default function Banner2({ isActive }) {

  const textVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut",
        },
      }),
    };

  return (
    <div className="overflow-hidden relative text-neutral-white">
      <motion.h1
        className="
          absolute text-[64px] font-bold
          top-[71px] left-1/2 -translate-x-1/2 -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        Worker
      </motion.h1>

      <motion.h2
        className="
          absolute text-[28px] top-[138px] left-[403px] -translate-y-1/2 
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.2}
      >
        A produtividade que você merece
      </motion.h2>

       <motion.h2
        className="
          absolute text-[28px] top-[193px] left-[370px] -translate-y-1/2 
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.2}
      >
        Organize suas tarefas e facilite seu dia a dia!
      </motion.h2>

       <motion.h2
        className="
          absolute text-[28px] top-[267px] left-[475px] -translate-y-1/2
        "
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.2}
      >
        Seu tempo vale muito mais
      </motion.h2>

      <motion.p
        className="absolute text-[16px] top-[369px] left-[370px] -translate-y-1/2"
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        custom={0.4}
      >
        *essa página ainda está em desenvolvimento
      </motion.p>

      <img
        src={banner}
        alt=""
        className="w-full"
      />
    </div>
  );
}