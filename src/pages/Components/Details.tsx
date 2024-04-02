import Cards from "./Cards.tsx";
import { motion } from "framer-motion";

function Details() {
  return (
    <div className="h-screen mb-10" id="solutions">
      <motion.h2
        className="text-zinc-100 text-4xl font-bold text-center font-serif"
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        Find out why we’re best-in-class
      </motion.h2>
      <Cards />
    </div>
  );
}

export default Details;
