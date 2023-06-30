import style from "./Card.module.css";
import shopping from '../../assets/carrito de compras/Rectangle 1.png'
import {NavLink} from 'react-router-dom';
import { useState, useEffect } from "react";
import {addItemsActions, deleteItemActions} from '../../redux/foodActions.js'

export default function Card({ id,name, image, final_price }) {
  const [isItem,setIsItem]=useState(false);
  useEffect(()=>{
    state.orderItems.forEach((it)=>{
      if(it.id===id){
        setIsItem(true);
      }
    });
  },[orderItems])
  const handleClick=(e)=>{
    if(isShop){
      setIsItem(false),
      deleteItemActions(id);
    }else{
      setIsItem(true);
      addItemsActions({id,name,image,final_price})
    }
    
  }
  return (
    <div className={style.card}>
      <NavLink to={`/detail/${id}`}>
        <div><img src={image} alt="img not found" className={style.card_img}/></div>
        <div className={style.txt}>
          <h2>{name}</h2>
        </div>
      </NavLink>
      <div className={style.p}>
        <p>${final_price}</p>
      </div>
      <button onClick={handleClick(e)}><img src={shopping} alt='carrito de compras' className={style.shopping} /></button>
      {/* <p>
        Dietas:{" "}
        {diets.map((diet) => (
          <span>{diet}</span>
        ))}
      </p>
      <p>Categoría: {category}</p> */}
    </div>
  );
}
