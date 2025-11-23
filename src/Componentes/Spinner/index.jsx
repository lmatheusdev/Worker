import { motion } from "framer-motion";

export default function Spinner() {

  return (
    <motion.span 
      className="
        w-7 h-7 border-5 border-neutral-white border-b-transparent
        rounded-[50%] inline-block box-border
      "
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      
    />
  );
};