import React from 'react';
import StarsRating from "./StarsRating.jsx";

const CardProduct = (item,key) => {
    item = item.item
    return (
        <div key={key}>
            <i className="ri-heart-line"></i>
            <div><i className="ri-shopping-cart-2-line"></i></div>
            <img src="../../public/exemple_product.jpg" alt={item.description}/>
            <div>
                <h3>{item.name}</h3>
                <strong>$ <span>{item.price}</span></strong>
                <StarsRating rating='80'/>
                <div><a href={`/product/${item.id}`}>read more</a></div>
            </div>
        </div>
    )
}

export default CardProduct;