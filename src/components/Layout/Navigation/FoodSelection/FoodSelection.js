import React from "react";
import "./FoodSelection.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FoodSelection() {
  return (
    <motion.div className="container foodSelection-box mb-4"initial={{x: 800}}
    animate={{x:0}}
    transition={{ease: 'easeOut', duration: 1}}>
        <h1 className="text-center">¿Que vas a pedir?</h1>
      <div class="list-group selection-box">
        <Link to="/category/Pizzas" class="ButtonGreetings" aria-current="true">
          Pizzas
        </Link>
        <Link to="/category/Empanadas" class="ButtonGreetings">
          Empanadas
        </Link>
        <Link to="/category/Bebidas" class="ButtonGreetings">
          Bebidas
        </Link>
        <Link to="/category/Postres" class="ButtonGreetings">
          Postres
        </Link>
      </div>
    </motion.div>
  );
}
