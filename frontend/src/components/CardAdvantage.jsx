import React from "react";

const CardAdvantage = ({img,title,p,alt}) => {
    return (
    <div className="my-5 max-sm:w-full sm:w-2/7 rounded-4xl p-3 flex flex-col items-center justify-between hover:outline-2 hover:outline-[#F54748]" style={{ boxShadow: '4px 4px 10px 0px #00000040' }}>
        <img className="h-40 sm:h-52" src={`../../public/delivery/${img}.png`} alt={alt}/>
        <h3 className="my-3 font-bold text-xl sm:text-2xl text-center">{title}</h3>
        <p className="text-base sm:text-lg font-medium text-[#787878] text-center">{p}</p>
    </div>
    )
}

export default CardAdvantage