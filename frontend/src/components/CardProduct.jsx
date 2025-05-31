import React from 'react';
import StarsRating from "./StarsRating.jsx";

const CardProduct = (item,key) => {
    item = item.item
    return (
        <div className="flex max-lg:flex-row lg:justify-between relative max-lg:w-full lg:w-60 lg:flex-col rounded-4xl overflow-hidden border border-[#00000040] h-45 lg:h-90 hover:border-[#F54748]" key={key} style={{ boxShadow: '4px 4px 4px 0px #00000040' }}>
            <i className="ri-heart-line absolute top-3 right-3 text-white text-xl z-20 text-shadow-black text-shadow-sm"></i>
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-[#F54748] text-white p-5 rounded-full h-1 w-1">
                <i className="ri-shopping-cart-2-line"></i>
            </div>
            <div className="max-lg:w-1/2 max-lg:h-45 relative z-0 flex items-center justify-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-[#F54748] before:opacity-80 before:z-0">
                <img className="w-full lg:h-45 object-cover object-center" src={`http://127.0.0.1:8000/storage/product/${item.image}`} alt={item.description} />
            </div>
            <div className="p-3 h-44 lg:text-center flex flex-col lg:items-center gap-1 ml-5">
                <h3 className="font-bold lg:text-lg text-xl">{item.name}</h3>
                <strong className="text-[#F54748] font-bold text-xl">$ <span className="text-4xl">{item.price}</span></strong>
                <StarsRating rating='80'/>
                <a className="font-normal text-base text-white bg-[#00000040] rounded-full px-5 py-1 hover:bg-[#F54748]" href={`/product/${item.id}`}>read more</a>
            </div>
        </div>

    )
}

export default CardProduct;