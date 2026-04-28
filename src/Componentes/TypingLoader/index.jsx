import { motion } from 'framer-motion';

const TypingLoader = () => {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -5 },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex items-center space-x-2 p-2 bg-primary-green w-fit rounded-2xl rounded-bl-none mb-2 ml-2"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: i * 0.15 }}
          className="w-2 h-2 bg-neutral-white rounded-full"
        />
      ))}
    </motion.div>
  );
};

export default TypingLoader;