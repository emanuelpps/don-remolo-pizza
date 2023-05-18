import React from "react";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getProductsByCategory
} from "../../../../../services/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import Loader from "../../Loader/Loader";

export default function ItemListContainer(){
  const {categoryId} = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadingProducts = (categoryId) =>{
    if (categoryId === undefined){
      return (getAllProducts());
    } else {
      return(getProductsByCategory());
    }
  };
    
  useEffect (() =>{
    setInterval(() => {
      loadingProducts().then((data) => {
        setIsLoading(false);
        setItems(data);
      })
      .catch((errorMsg) =>{
        console.error(errorMsg);
      })
    },3000);
  },
  [categoryId]
  )



    if(categoryId !== undefined){
        return isLoading ?  <Loader/> : (
          <section className='text-center mt-5'>
          <h3 className='mb-5'>{categoryId}</h3>
          <article className="itemList">  
            {
                <ItemList items={ items.filter(product => product.category === `${categoryId}`) } />
                
            }
            </article>
          </section>
        ) 
    }else{
        return isLoading ? <Loader/> : (
          <section className='text-center'>
          <h3>Todos los Productos</h3>
          <ItemList items={items} category={categoryId}/>
          </section>
        )
    }
};
