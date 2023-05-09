import React from 'react';
import './Loader.css';


export default function Loader() {
  return (
    <div className='pizzaLoader'>
        <div className='pizzaBox text-center'>
            <img className='pizzaLoaderImg' src={process.env.PUBLIC_URL + "/images/pizza.gif"} alt='Loading...'/>
            <h4>Cargando...</h4>
        </div>
    </div>
  )
}
