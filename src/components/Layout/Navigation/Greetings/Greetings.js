import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import "./Greetings.css";
import { Link } from "react-router-dom";
//import { useState } from "react";

/* const [ loading, setLoading ] = useState(false);

function loadingProcess (){
  const divMotion =  document.getElementById("motionDiv");


}
 */

export const Slideshow = ({motionDiv}) =>(
  <AnimatePresence>
    <motion.div>
      
    </motion.div>
  </AnimatePresence>
)


export default function Greetings() {
  return (
    <motion.div
    id= "motionDiv"
    initial={{x: 800}}
    animate={{x:0}}
    transition={{ease: 'easeOut', duration: 1}}
     className="d-flex align-items-center flex-column text-center mb-5">
      <h1>DON REMOLO</h1>
      <img
        className="LogoSlide"
        src={process.env.PUBLIC_URL + "/images/logo.jpg"}
        alt="Logo Pizzeria Don Remolo"
      />
      <Link to='/food-selection/'>
      <button className="ButtonGreetings" >
        <span>Ingresar</span>
      </button>
      </Link>
    </motion.div>
  );
}
