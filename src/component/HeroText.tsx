import { motion } from "framer-motion"
import Compass from "./Compas";

function HeroText() {
  return (
    <motion.div
        layout
        initial={{height:0}}
        animate={{ height: "unset" }}
        transition={{ delay: 5, duration: 1}}
     className="d-flex flex-column align-items-center text-center">
    
    <motion.div  initial={{y:50, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay:6, duration:0.5}} className="d-flex flex-column fw-bold mb-4 fs-1 pt-5">
        <span>deliverring <Compass/> industry's</span>
        <span>top tallents work</span>
    </motion.div>
      <motion.span initial={{y:50, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay:6.2, duration:0.5}} className="mb-3 w-25 leading-tight fs-6 fw-light ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        minima distinctio at explicabo rem id incidunt. Perspiciatis eius,
        repellat asperiores maxime eligendi debitis.
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
