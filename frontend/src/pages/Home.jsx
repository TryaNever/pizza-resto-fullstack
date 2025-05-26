import React , {useEffect, useState} from 'react';
import CardAdvantage from "../components/CardAdvantage.jsx";
import LoadHomeData from "../components/LoadHomeData.jsx";

const Home = () => {
    document.title = "Pizza App | Home"

    return (
        <main className="flex flex-col mb-10">
            <div className="text-center bg-[url(banner.png)] bg-no-repeat bg-cover bg-center">
                <div className="flex flex-col items-center justify-center max-md:h-[60vh] md:h-[80vh] bg-[#00000066] text-white space-y-12">
                    <p className="bg-[#FDD6D6] text-[#F54748] flex py-3 px-5 rounded-full text-base font-semibold">Beyond Speedy <img src="../../public/icone/pizza.png" alt="icone pizza"/></p>
                    <h2 className="font-bold w-3/5 sm:text-4xl md:text-5xl xl:text-7xl ">Ensure Your <span className="text-[#F54748]">Food</span> is Delivered with Speed</h2>
                    <p className="text-xs sm:text-xl md:text-2xl font-semibold">Our mission is to satisfy your appetite with delectable<br/> dishes, delivered swiftly and at no extra cost</p>
                    <p className="bg-[#F54748] flex py-3 px-5 rounded-full text-base font-semibold">Get Started</p>
                </div>
            </div>
            <div className="px-8 md:px-12 lg:px-32">
                <div className="my-10 md:my-20">
                    <p className="text-[#F54748] text-sm md:text-lg font-bold uppercase tracking-[20%]">Our Offerings</p>
                    <h2 className="text-xl md:text-5xl font-bold">Your Preferred Food Delivery Companion</h2>
                </div>
                <div className="flex max-sm:flex-col sm:flex-row sm:justify-between w-full">
                    <CardAdvantage img="delivery1" title="Convenient Ordering" p="Ordering food requires just a few simple steps" alt="man with phone and package"/>
                    <CardAdvantage img="delivery2" title="Quickest Delivery" p="Consistently Timely Delivery, Even Faster" alt="Delivery man on a scooter"/>
                    <CardAdvantage img="delivery3" title="Superior Quality" p="For us, quality is paramount, not just speed" alt="man with a package and a scooter next to"/>
                </div>
            </div>
            <div>
                <LoadHomeData />
            </div>
        </main>
    );
};

export default Home;
