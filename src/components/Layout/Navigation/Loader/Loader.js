import React from 'react';
import './Loader.css';
import LoaderImg from '../../../../assets/images/pizza.gif'

export default function Loader() {
  return (
    <div className='pizzaLoader'>
        <div className='pizzaBox text-center'>
            <img className='pizzaLoaderImg' src={LoaderImg} alt='Loading...'/>
            <h4>Cargando...</h4>
        </div>
    </div>
  )
}
