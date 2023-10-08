import React, { useEffect, useState } from "react";
import "./cardstyle.css";
import ItemCount from "../ItemCount/ItemCount";




const ProductCard = ({imge="Sin Imgaen", title=" " ,description=" ", price=0}) => {
    const [product, setProducts] = useState ([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>console.log(json))
    }, [])


    return (  
            <div class="card">
            <img src={product.image} alt="Imagen de la tarjeta"></img>
            <div class="card-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span>{product.price}</span>
                <button class="card-button">Ver detalles</button>
            </div>
        </div>
    
    )
  
}

export default ProductCard;
