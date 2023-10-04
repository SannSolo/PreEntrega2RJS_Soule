import React, {useContext} from 'react';

// export const cart
// const cartContext = useContext{cartContext}


const Item = ({prendas}) => {
    return (
        <div class="card">
        <img src={prendas.id} alt="Imagen de la tarjeta"></img>
        <div class="card-info">
            <h2>{prendas.nombre}</h2>
            <p>{prendas.talle}</p>
            <span>{prendas.precio}</span>
            <button class="card-button">Ver detalles</button>
        </div>
    </div>
    )
};


export default Item; 