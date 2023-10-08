import React, {useContext} from 'react';

// export const cart
// const cartContext = useContext{cartContext}
{products.map((product) => (
    <ProductCard key={product.id} image={product.image} title={product.title} description={product.description} preice={product.price}  />          ))}

const ProductCard = ({product}) => {
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
};


export default ProductCard; 