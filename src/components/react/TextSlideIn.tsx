import { motion } from "framer-motion";

interface TextSlideInProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export const TextSlideIn = ({
  text,
  delay = 0,
  duration = 0.8,
  className = "",
}: TextSlideInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1], // Suave desaceleración
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};
