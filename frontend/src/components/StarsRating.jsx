import React from 'react';

const StarsRating = ({rating}) => {
    return (
    <div className="relative flex w-max text-[#FDC55E] text-xl">
                    <div className="flex">
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                        <i className="ri-star-line"></i>
                    </div>
                    <div className={`absolute top-0 left-0 flex overflow-hidden w-[${rating}%]`}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>
                </div>
    )
}
export default StarsRating;