import React from "react";
import "./cardstyle.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemList = () => {
  return (  
    <>
    <div class="card">
    <img src="imagen.jpg" alt="Imagen de la tarjeta"></img>
    <div class="card-info">
        <h2>Título de la tarjeta</h2>
        <p>Descripción de la tarjeta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="card-button">Ver detalles</button>
        <ItemCount />
    </div>
</div>
      
    </>
    )
  
}

export default ItemList;
