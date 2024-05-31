import { reveal } from "../utils/animation";
import ArrowRight from "./ArrowRight";
import Logo from "./Logo";
import { motion } from "framer-motion"

function Navbar(){
    return(
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 5, duration:0.5}} >
                 <motion.div variants={reveal} initial="hiddenVariant" animate="revealedVariant" transition={{ease:"easeIn", type: "tween", staggerChildren: 0.1, delayChildren: 5.5, duration:0.5}} className="d-flex align-items-center justify-content-around h-80px fixed-top bg-white z-100" >
                    <motion.div  variants={reveal}>
                    <Logo/>
                    </motion.div>
                    <div className="d-flex gap-2 align-items-center">
                        <motion.span variants={reveal} className="cursor-pointer">solutions.</motion.span>
                        <motion.span variants={reveal} className="cursor-pointer">courses.</motion.span>
                        <motion.span variants={reveal} className="cursor-pointer">resources.</motion.span>
                        <motion.span variants={reveal} className="cursor-pointer">about.</motion.span>
                    </div>
                    <div className="d-flex gap-1 align-items-center cursor-pointer">
                        <motion.span variants={reveal} className="mb-3px">sign in</motion.span>
                        <ArrowRight/>
                    </div>
                </motion.div>
            </motion.div>
    ) 
}

export default Navbar;