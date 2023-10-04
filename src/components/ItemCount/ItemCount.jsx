import './IC_Style.css';
import React, {useState} from 'react';

export const ItemCount = () => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    return ( 
        <div className='counter'>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
